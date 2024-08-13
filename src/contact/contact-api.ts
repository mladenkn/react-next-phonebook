import { Contact } from "./contact-schema"
import { createTRPCRouter, publicProcedure } from "~/api/trpc"
import { z } from "zod"
import { eq, desc, and, ilike, or, SQL } from "drizzle-orm"
import { ContactUpdateInput, ContactCreateInput } from "./contact-api-inputs"
import { getRandomAvatarStyle } from "./contact-data-generators"
import { asNonNil } from "~/utils"

const contactApi = createTRPCRouter({
  list: publicProcedure
    .input(
      z.object({ search: z.string().optional(), isFavorite: z.boolean().optional() }).optional(),
    )
    .query(async ({ ctx, input }) => {
      const searchFilter =
        input?.search &&
        or(ilike(Contact.fullName, `%${input.search}%`), ilike(Contact.email, `%${input.search}%`))

      const favoriteFilter = input?.isFavorite && eq(Contact.isFavorite, true)
      const optionalFilters = [searchFilter, favoriteFilter].filter(f => f) as SQL<unknown>[]

      const list = await ctx.db.query.Contact.findMany({
        where: and(...[eq(Contact.isDeleted, false), ...optionalFilters]),
        orderBy: [desc(Contact.id)],
      })

      return list
    }),

  single: publicProcedure.input(z.number()).query(({ ctx, input }) =>
    ctx.db.query.Contact.findFirst({
      where: and(eq(Contact.id, input), eq(Contact.isDeleted, false)),
      with: { phoneNumbers: true },
    }).then(c => c || null),
  ),

  update: publicProcedure.input(ContactUpdateInput).mutation(({ ctx, input }) =>
    ctx.db
      .update(Contact)
      .set({ isFavorite: input.isFavorite })
      .where(eq(Contact.id, input.id))
      .returning()
      .then(c => asNonNil(c[0])),
  ),

  create: publicProcedure.input(ContactCreateInput).mutation(({ ctx, input }) =>
    ctx.db
      .insert(Contact)
      .values({ ...input, avatarStyle: getRandomAvatarStyle() })
      .returning()
      .then(c => asNonNil(c[0])),
  ),

  delete: publicProcedure
    .input(z.number())
    .mutation(({ ctx, input }) =>
      ctx.db.update(Contact).set({ isDeleted: true }).where(eq(Contact.id, input)),
    ),
})

export default contactApi

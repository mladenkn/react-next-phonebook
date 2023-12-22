import { Contact } from "./contact-schema"
import { createTRPCRouter, publicProcedure } from "~/api/trpc"
import { z } from "zod"
import { eq } from "drizzle-orm"

const contactApi = createTRPCRouter({
  list: publicProcedure.query(({ ctx }) =>
    ctx.db.query.Contact.findMany({ where: eq(Contact.isDeleted, false) }),
  ),

  single: publicProcedure.input(z.number()).query(({ ctx, input }) =>
    ctx.db.query.Contact.findFirst({
      where: eq(Contact.id, input),
      with: { phoneNumbers: true },
    }),
  ),

  update: publicProcedure
    .input(z.object({ id: z.number(), isFavorite: z.boolean().nullish() }))
    .mutation(({ ctx, input }) =>
      ctx.db.update(Contact).set({ isFavorite: input.isFavorite || undefined }),
    ),
})

export default contactApi

import { Contact, PhoneNumber } from "./contact-schema"
import { createTRPCRouter, publicProcedure, TrpcContext } from "~/api/trpc"
import { z } from "zod"
import { eq, desc, and, ilike, or, SQL, notInArray, ne } from "drizzle-orm"
import { ContactFormInput } from "./contact-api-shared"
import { getRandomAvatarStyle } from "./contact-data-generators"
import { asNonNil, pick } from "~/utils"
import { Database } from "~/db/db.instance"

const ContactFavoriteInput = z.object({
  id: z.number(),
  isFavorite: z.boolean(),
})

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

  update: publicProcedure
    .input(ContactFormInput.extend({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.transaction(async tx => {
        // update root entries
        await tx
          .update(Contact)
          .set(pick(input, "fullName", "email", "avatarUrl"))
          .where(eq(Contact.id, input.id))

        const existingPhoneNumbersInput = input.phoneNumbers
          ?.filter(n => n.id)
          .map(n => ({ id: n.id!, contactId: input.id, value: n.value, label: n.label }))

        if (existingPhoneNumbersInput?.length) {
          // delete phone numbers that are no longer specified
          const existingPhoneNumbersIds = existingPhoneNumbersInput.map(n => n.id)
          await tx
            .delete(PhoneNumber)
            .where(
              and(
                eq(PhoneNumber.contactId, input.id),
                notInArray(PhoneNumber.id, existingPhoneNumbersIds),
              ),
            )

          // update remaining phone numbers
          await Promise.all(
            existingPhoneNumbersInput.map(number =>
              tx.update(PhoneNumber).set(number).where(eq(PhoneNumber.id, number.id)),
            ),
          )
        }

        // insert new phone numbers
        const newPhoneNumbersInput = input.phoneNumbers
          ?.filter(n => !n.id)
          .map(n => ({ value: n.value, label: n.label, contactId: input.id }))
        if (newPhoneNumbersInput?.length) {
          await tx.insert(PhoneNumber).values(newPhoneNumbersInput)
        }
      })

      return { id: input.id }
    }),

  favorite: publicProcedure.input(ContactFavoriteInput).mutation(async ({ ctx, input }) => {
    await ctx.db
      .update(Contact)
      .set({ isFavorite: input.isFavorite })
      .where(eq(Contact.id, input.id))

    return await ctx.db.query.Contact.findFirst({
      where: eq(Contact.id, input.id),
      with: { phoneNumbers: true },
    }).then(c => c || null)
  }),

  create: publicProcedure
    .input(ContactFormInput)
    .mutation(({ ctx, input }) => createContact(ctx.db, input)),

  delete: publicProcedure
    .input(z.number())
    .mutation(({ ctx, input }) =>
      ctx.db.update(Contact).set({ isDeleted: true }).where(eq(Contact.id, input)),
    ),
})

export default contactApi

// TODO: pokušat stavit u router pa zvat preko apiSS
export function createContact(db: Database, input: z.infer<typeof ContactFormInput>) {
  return db.transaction(async tx => {
    const contact = await tx
      .insert(Contact)
      .values({ ...input, avatarStyle: getRandomAvatarStyle() })
      .returning()
      .then(c => asNonNil(c[0]))

    const newPhoneNumbersInput = input.phoneNumbers?.map(n => ({
      value: n.value,
      label: n.label,
      contactId: contact.id,
    }))

    if (newPhoneNumbersInput && newPhoneNumbersInput.length) {
      await tx.insert(PhoneNumber).values(newPhoneNumbersInput)
    }

    return contact
  })
}

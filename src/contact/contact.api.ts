import { Contact } from "./contact-schema"
import { createTRPCRouter, publicProcedure } from "~/api/trpc"
import { z } from "zod"
import { eq, desc } from "drizzle-orm"

const contactApi = createTRPCRouter({
  list: publicProcedure.query(({ ctx }) =>
    ctx.db.query.Contact.findMany({
      where: eq(Contact.isDeleted, false),
      orderBy: [desc(Contact.id)],
    }),
  ),

  single: publicProcedure.input(z.number()).query(({ ctx, input }) =>
    ctx.db.query.Contact.findFirst({
      where: eq(Contact.id, input),
      with: { phoneNumbers: true },
    }),
  ),

  update: publicProcedure
    .input(z.object({ id: z.number(), isFavorite: z.boolean().optional() }))
    .mutation(({ ctx, input }) =>
      ctx.db.update(Contact).set({ isFavorite: input.isFavorite }).where(eq(Contact.id, input.id)),
    ),

  delete: publicProcedure
    .input(z.number())
    .mutation(({ ctx, input }) =>
      ctx.db.update(Contact).set({ isDeleted: true }).where(eq(Contact.id, input)),
    ),
})

export default contactApi

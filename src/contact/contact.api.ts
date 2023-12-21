import { Contact } from "./contact-schema"
import { createTRPCRouter, publicProcedure } from "~/api/trpc"
import { z } from "zod"
import { eq } from "drizzle-orm"

const contactApi = createTRPCRouter({
  list: publicProcedure.query(({ ctx }) => ctx.db.query.Contact.findMany()),

  single: publicProcedure.input(z.number()).query(({ ctx, input }) =>
    ctx.db.query.Contact.findFirst({
      where: eq(Contact.id, input),
      with: { phoneNumbers: true },
    }),
  ),
})

export default contactApi

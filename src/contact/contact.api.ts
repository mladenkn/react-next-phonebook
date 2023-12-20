import { Contact } from "./contact-schema"
import { createTRPCRouter, publicProcedure } from "~/api/trpc"

const contactApi = createTRPCRouter({
  list: publicProcedure.query(({ ctx }) => ctx.db.select().from(Contact)),
})

export default contactApi
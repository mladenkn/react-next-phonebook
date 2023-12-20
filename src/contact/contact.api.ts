import db from "~/drizzle/drizzle.instance";
import { Contact } from "./contact-schema";
import { createTRPCRouter, publicProcedure } from "~/api/trpc";

export async function contactApiList(){
  return await db.select().from(Contact)
}

const contactApi = createTRPCRouter({
  list: publicProcedure.query(({ ctx }) => ctx.db.select().from(Contact))
})

export default contactApi

export type ContactListItemModel = Awaited<ReturnType<typeof contactApiList>>[0]
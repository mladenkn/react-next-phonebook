import db from "~/drizzle/drizzle.instance";
import { Contact } from "./contact-schema";

export async function contactApiList(){
  return await db.select().from(Contact)
}

export type ContactListItemModel = Awaited<ReturnType<typeof contactApiList>>[0]
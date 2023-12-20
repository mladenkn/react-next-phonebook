import db from "~/drizzle/drizzle.instance";
import { Contact } from "./contact-schema";

export async function contactApiList(){
  return await db.select().from(Contact)
}

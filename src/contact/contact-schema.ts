import {
  pgTable,
  varchar,
  serial,
  json
} from "drizzle-orm/pg-core"

export const User = pgTable("Contact", {
  id: serial("id").primaryKey().notNull(),
  // name: varchar("name", { length: 32 }),
  // avatarStyle: json("avatarStyle"),    
})
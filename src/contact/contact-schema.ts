import {
  pgTable,
  varchar,
  serial,
  json,
  boolean
} from "drizzle-orm/pg-core"

export const User = pgTable("Contact", {
  id: serial("id").primaryKey().notNull(),
  fullName: varchar("name", { length: 64 }).notNull(),
  avatarStyle: json("avatarStyle"),
  avatarUrl: varchar("avatarUrl"),
  email: varchar("email").notNull(),
  isFavorite: boolean("isFavorite").notNull().default(false)
})
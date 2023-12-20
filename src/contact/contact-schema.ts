import {
  pgTable,
  varchar,
  serial,
  json,
  boolean,
  integer
} from "drizzle-orm/pg-core"

export const Contact = pgTable("Contact", {
  id: serial("id").primaryKey().notNull(),
  fullName: varchar("name", { length: 64 }).notNull(),
  avatarStyle: json("avatarStyle"),
  avatarUrl: varchar("avatarUrl"),
  email: varchar("email").notNull(),
  isFavorite: boolean("isFavorite").notNull().default(false)
})

export const PhoneNumber = pgTable("PhoneNumber", {
  id: serial("id").primaryKey().notNull(),
  value: integer("value").notNull(), // TODO: vjer varchar
  label: varchar("label").notNull(),
  contactId: integer("contactId").notNull().references(() => Contact.id)
})

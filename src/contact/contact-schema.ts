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
  fullName: varchar("name", { length: 32 }).notNull(),
  avatarStyle: json("avatarStyle").$type<{ backgroundColor: string, color: string }>(),
  avatarUrl: varchar("avatarUrl"),
  email: varchar("email").notNull(),
  isFavorite: boolean("isFavorite").notNull().default(false)
})

export const PhoneNumber = pgTable("PhoneNumber", {
  id: serial("id").primaryKey().notNull(),
  value: varchar("value", { length: 32 }).notNull(),
  label: varchar("label", { length: 32 }).notNull(),
  contactId: integer("contactId").notNull().references(() => Contact.id)
})

import { pgTable, varchar, serial, json, boolean, integer } from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"

export const Contact = pgTable("Contact", {
  id: serial("id").primaryKey().notNull(),
  fullName: varchar("name", { length: 32 }).notNull(),
  avatarStyle: json("avatarStyle").$type<{ backgroundColor: string; color: string }>().notNull(),
  avatarUrl: varchar("avatarUrl"),
  email: varchar("email"),
  isFavorite: boolean("isFavorite").notNull().default(false),
  isDeleted: boolean("isDeleted").notNull().default(false),
})

export const PhoneNumber = pgTable("PhoneNumber", {
  id: serial("id").primaryKey().notNull(),
  value: varchar("value", { length: 32 }).notNull(),
  label: varchar("label", { length: 32 }).notNull(),
  contactId: integer("contactId")
    .notNull()
    .references(() => Contact.id),
})

export const ContactRelations = relations(Contact, ({ many }) => ({
  phoneNumbers: many(PhoneNumber),
}))

export const PhoneNumberRelations = relations(PhoneNumber, ({ one }) => ({
  contact: one(Contact, {
    fields: [PhoneNumber.contactId],
    references: [Contact.id],
  }),
}))

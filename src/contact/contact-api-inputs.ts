import { z } from "zod"

export const ContactUpdateInput = z.object({
  id: z.number(),
  fullName: z.string().optional(),
  avatarUrl: z.string().url().nullish(),
  email: z.string().email().optional(),
  phoneNumbers: z
    .array(
      z.object({
        id: z.number().optional(),
        value: z.string(),
        label: z.string(),
      }),
    )
    .optional(),
})

export const ContactUpdate1Input = z.object({
  id: z.number(),
  isFavorite: z.boolean().optional(),
})

export const ContactCreateInput = z.object({
  fullName: z.string(),
  avatarUrl: z.string().nullish(),
  email: z.string().email().optional(),
  phoneNumbers: z
    .array(
      z.object({
        value: z.string(),
        label: z.string(),
      }),
    )
    .optional(),
})

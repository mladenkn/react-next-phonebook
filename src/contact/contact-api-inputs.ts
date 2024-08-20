import { z } from "zod"

export const ContactFormInput = z.object({
  fullName: z.string(),
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
  isFavorite: z.boolean(),
})

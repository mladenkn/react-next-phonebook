import { z } from "zod"

export const ContactUpdateInput = z.object({
  id: z.number(),
  isFavorite: z.boolean().optional(),
  fullName: z.string().optional(),
  avatarUrl: z.string().url().nullish(),
  email: z.string().email().optional(),
  // TODO: phone numbers
})

export const ContactCreateInput = z.object({
  fullName: z.string(),
  avatarUrl: z.string().optional(),
  email: z.string().email(),
})

import { z } from "zod"

export const ContactFormInput = z.object({
  fullName: z.string().min(1, { message: "Potreban je unos" }),
  avatarUrl: z.string().url().nullish(),
  email: z.string().email({ message: "Neispravan mail" }).optional(),
  phoneNumbers: z
    .array(
      z.object({
        id: z.number().optional(),
        value: z.string().min(1, { message: "Potreban je unos" }),
        label: z.string(),
      }),
    )
    .optional(),
})

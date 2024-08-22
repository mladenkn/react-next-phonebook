import { z } from "zod"

export const ContactFormInput = z.object({
  fullName: z.string().min(1, { message: "Required" }),
  avatarUrl: z.string().url().nullish(),
  email: z.string().email({ message: "Invalid e-mail" }),
  phoneNumbers: z
    .array(
      z.object({
        id: z.number().optional(),
        value: z.string().min(1, { message: "Required" }),
        label: z.string(),
      }),
    )
    .optional(),
})

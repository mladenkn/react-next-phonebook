import type { Config } from "drizzle-kit"
import { env } from "~/env"

export default {
  schema: ["./src/contact/contact-schema.ts"],
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  dialect: "postgresql",
} satisfies Config

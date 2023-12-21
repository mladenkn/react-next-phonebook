import type { Config } from "drizzle-kit"
import { env } from "~/env"

export default {
  schema: ["./src/contact/contact-schema.ts"],
  driver: "pg",
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
} satisfies Config

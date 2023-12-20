import type { Config } from "drizzle-kit"
import { asNonNil } from "~/utils"

export default {
  schema: "./drizzle/drizzle.schema.ts",
  // out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: asNonNil(process.env.DATABASE_URL),
  },
} satisfies Config

import { type Config } from "drizzle-kit";

export default {
  schema: "./src/server/db/schema.ts",
  driver: "mysql2",
  dbCredentials: {
    connectionString: "TODO",
  },
  tablesFilter: ["phonebook_*"],
} satisfies Config;

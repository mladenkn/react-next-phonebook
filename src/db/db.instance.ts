import postgres from "postgres"
import { drizzle } from "drizzle-orm/postgres-js"
import { asNonNil } from "~/utils"
import * as ContactSchema from "~/contact/contact-schema"
import { env } from "~/env"

const globalForPg = globalThis as unknown as { poolConnection: ReturnType<typeof postgresConnect> }

const poolConnection = globalForPg.poolConnection || postgresConnect()

if (env.NODE_ENV !== "production") globalForPg.poolConnection = poolConnection

const db = drizzle(poolConnection, {
  schema: { ...ContactSchema },
})
export default db

function postgresConnect() {
  return postgres(asNonNil(env.DATABASE_URL), {
    ssl: "require",
    max: 1,
  })
}

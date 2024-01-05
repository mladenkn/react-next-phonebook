import { createTRPCRouter } from "~/api/trpc"
import contactApi from "~/contact/contact-api"

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  contact: contactApi,
})

// export type definition of API
export type AppRouter = typeof appRouter

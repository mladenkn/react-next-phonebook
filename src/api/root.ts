import { createTRPCRouter } from "~/api/trpc"
import { publicProcedure } from "~/api/trpc"
import { z } from "zod"
import contactApi from "~/contact/contact.api"

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: createTRPCRouter({
    hello: publicProcedure.input(z.object({ text: z.string() })).query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      }
    }),
  }),
  contact: contactApi
})

// export type definition of API
export type AppRouter = typeof appRouter

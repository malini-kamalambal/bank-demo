import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();

export const usersRouter = t.router({
  auth: t.procedure
    .input(z.object({ username: z.string(), password: z.string() }))
    .query(({ input }) => {

      /**
       * @todo Implement authentication
       */

      return { 
        success: true,
        accountId: 1, 
        username: input.username 
      };
    }),
});

import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';

import { usersRouter } from './routes/users';

const t = initTRPC.create();

const helloRouter = t.router({
  greeting: t.procedure
    .input(z.object({ name: z.string() }).nullish())
    .query(({ input }) => {
      return `Hello ${input?.name ?? 'World'}`;
    }),
});

export const router = t.router({
  hello: helloRouter,
  users: usersRouter,
});

export type AppRouter = typeof router;

// 👇 type helpers 💡
export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;
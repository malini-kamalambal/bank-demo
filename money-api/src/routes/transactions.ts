import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import { Transaction } from '../lib/db';

const t = initTRPC.create();


export const transactionsRouter = t.router({
  recent: t.procedure
    .input(z.object({ accountId: z.number().int().finite().positive() }))
    .query(async ({ input }) => {
      return {transactions: await Transaction.findAll(), accountId: input.accountId};
    }),
});
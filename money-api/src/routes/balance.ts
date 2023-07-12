import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import { Transaction } from '../lib/db';

const t = initTRPC.create();


export const balanceRouter = t.router({
  account: t.procedure
    .input(z.object({ accountId: z.number().int().finite().positive() }))
    .query(async ({ input }) => {
      
      const transactions = await Transaction.findAll();

      const balance = transactions.reduce((acc, transaction: any) => {
        return acc + parseFloat(transaction.amount);
      }, 0);
      
      return {balance: balance, accountId: input.accountId};
    }),
});
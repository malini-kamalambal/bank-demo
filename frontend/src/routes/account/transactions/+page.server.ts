import { makeMoneyApiClient } from '$lib/trpc/client';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }: any) {
  
  const client = makeMoneyApiClient();

  return {
    transactions: (await client.transactions.recent.query({ accountId: locals.user.id }))
      .transactions
  };
}

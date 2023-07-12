import { makeMoneyApiClient } from '$lib/trpc/client';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }: any) {
  
  const client = makeMoneyApiClient();

  return {
    balance: (await client.balance.account.query({ accountId: locals.user.id }))
      .balance
  };
}

import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { money, users} from '$lib/trpc/router';

export const makeMoneyApiClient = () => {

  const client = createTRPCProxyClient<money.AppRouter>({
    links: [
      httpBatchLink({
        url: process.env.MONEY_API_URL || 'http://localhost:3000/trpc'
      })
    ]
  });

  return client;
}

export const makeUsersApiClient = () => {

  const client = createTRPCProxyClient<users.AppRouter>({
    links: [
      httpBatchLink({
        url: process.env.USERS_API_URL || 'http://localhost:3001/trpc'
      })
    ]
  });

  return client;
}
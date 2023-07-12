import type { LayoutServerLoad } from './$types';

// get `locals.user` and pass it to the `page` store
export const load: LayoutServerLoad = async ({ locals }: any) => {
  return {
    motd: process.env.MOTD,
    user: locals.user
  };
};

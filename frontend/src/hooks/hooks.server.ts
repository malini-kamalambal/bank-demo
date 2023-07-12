import { parse } from 'cookie';
import jwt from 'jsonwebtoken';
import { redirect } from '@sveltejs/kit';

const JWT_SECRET = 'secret';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  const isAuthedPage = event.url.pathname.startsWith('/account');

  const cookies = parse(event.request?.headers.get('cookie') || '');

  let user = null;

  if (cookies.token) {
    try {
      const decoded = jwt.verify(cookies.token, JWT_SECRET);
      user = decoded;
    } catch (err) {
      console.log('invalid token');
    }
  }

  if (isAuthedPage && !user) {
    throw redirect(302, '/login');
  }

  event.locals.user = user;

  const response = await resolve(event);
  return response;
}

// Hack to make docker container quit on ctrl-c
['SIGTERM', 'SIGINT'].forEach((sig) => {
  process.on(sig, () => {
    process.exit();
  });
})

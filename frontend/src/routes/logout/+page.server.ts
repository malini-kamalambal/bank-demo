import jwt from 'jsonwebtoken';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, cookies }) {
  locals.user = null;

  cookies.set('token', '');

  throw redirect(303, '/');
}

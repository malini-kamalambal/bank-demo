import { makeUsersApiClient } from '$lib/trpc/client';
import jwt from 'jsonwebtoken';
import { redirect } from '@sveltejs/kit';

const JWT_SECRET = 'secret';

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ cookies, request }: any) => {
    // get username and password
    const data = await request.formData();

    const username = data.get('username');
    const password = data.get('password');

    // Check that username and password are set
    if (!username || !password) {
      console.log('Missing username or password');
      return {
        status: 400,
        body: {
          error: 'Missing username or password'
        }
      };
    }

    // Get client for users api
    const client = makeUsersApiClient();

    // Check that username and password are correct
    const user = await client.users.auth.query({ username, password });

    // If not, return error
    if (!user.success) {
      console.log('Invalid username or password');
      return {
        status: 400,
        body: {
          error: 'Invalid username or password'
        }
      };
    }

    // Set a jwt token
    const token = jwt.sign({ username: user.username, id: user.accountId }, JWT_SECRET);

    cookies.set('token', token, {
      secure: false,
    });

    // Redirect to account page
    throw redirect(303, '/account/transactions');
  }
};

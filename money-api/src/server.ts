import { createExpressMiddleware } from '@trpc/server/adapters/express';
import express from 'express';
import { router } from './router';
import morgan from 'morgan';
import { init as InitDB } from './lib/db';

// Hack to make docker container quit on ctrl-c
['SIGTERM', 'SIGINT'].forEach((sig) => {
  process.on(sig, () => {
    process.exit();
  });
})

async function main() {

  await InitDB();

  // express implementation
  const app = express();

  app.use(morgan('dev'));

  // For testing purposes, wait-on requests '/'
  app.get('/', (_req, res) => res.send('Server is running!'));

  app.use(
    '/trpc',
    createExpressMiddleware({
      router: router,
      createContext: () => ({}),
    }),
  );

  console.log("Listening on port 3000")
  app.listen(3000);
}

main();

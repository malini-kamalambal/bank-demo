import { createExpressMiddleware } from '@trpc/server/adapters/express';
import express from 'express';
import { router } from './router';
import morgan from 'morgan';

// Hack to make docker container quit on ctrl-c
['SIGTERM', 'SIGINT'].forEach((sig) => {
  process.on(sig, () => {
    process.exit();
  });
})

const PORT = process.env.PORT || 3001;

async function main() {
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

  console.log(`Listening on port ${PORT}`)
  app.listen(PORT);
}

main();

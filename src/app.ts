import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';

import { HealthResolver } from './resolvers/health';

export default async function createApp() {
  const app = express();

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HealthResolver],
    }),
  });

  server.applyMiddleware({ app, path: '/graphql' });

  return app;
}

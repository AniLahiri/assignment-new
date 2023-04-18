import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { PersonResolver } from './PersonResolver';

export default async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [PersonResolver],
  });

  const server = new ApolloServer({ schema: schema });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

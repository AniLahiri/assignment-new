import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { PersonResolver } from './PersonResolver';
async function bootstrap() {
    const schema = await buildSchema({
        resolvers: [PersonResolver],
    });
    const server = new ApolloServer({ schema: schema });
    const { url } = await startStandaloneServer(server);
    console.log(`Server is running, GraphQL Playground available at ${url}`);
}
bootstrap();

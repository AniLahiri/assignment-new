import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { buildSchema } from "type-graphql";
import { resolvers } from "./resolvers/resolvers";

const globalSchema = buildSchema({
  resolvers,
  // add custom directive definitions here
  directives: [],
  validate: { forbidUnknownValues: false },
});

async function getApolloServer() {
  const schema = await globalSchema;
  return new ApolloServer({
    schema,
  });
}

export default startServerAndCreateNextHandler(await getApolloServer());

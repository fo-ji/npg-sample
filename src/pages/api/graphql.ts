import { ApolloServer } from "@apollo/server";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchemaSync } from "@graphql-tools/load";
import { addResolversToSchema } from "@graphql-tools/schema";
import { executeHTTPGraphQLRequest } from "@react-libraries/next-apollo-server";
import type { NextApiRequest, NextApiResponse } from "next";

import { createContext } from "@/graphql/context";
import { resolvers } from "@/graphql/resolvers";

const schema = loadSchemaSync("src/generated/schema.graphql", {
  loaders: [new GraphQLFileLoader()],
});

const schemaWithResolvers = addResolversToSchema({
  schema,
  resolvers,
});

const apolloServer = new ApolloServer({
  schema: schemaWithResolvers,
});

apolloServer.start();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  return executeHTTPGraphQLRequest({
    req,
    res,
    apolloServer,
    context: async () => await createContext({ req }),
  });
}

export const config = {
  api: {
    bodyParser: false,
  },
};

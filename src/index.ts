import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import express from "express";
import { ApiResolvers } from "./resolvers/apiResolvers";

import { LinkApi } from "./api/apiLink";
const main = async () => {
  const app = express();
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [ApiResolvers],
      validate: false,
    }),
    dataSources: () => ({
      apikey: new LinkApi(),
    }),
    //context:()=>{dataSources:dataSources}
  });
  await server.start();
  server.applyMiddleware({ app });

 app.listen(4000, () => {
        console.log("sevrer started on port 4000");
    });
};

main().catch((e) => {
  console.log(e);
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const express_1 = __importDefault(require("express"));
const apiResolvers_1 = require("./resolvers/apiResolvers");
const apiLink_1 = require("./api/apiLink");
const main = async () => {
    const app = (0, express_1.default)();
    const server = new apollo_server_express_1.ApolloServer({
        schema: await (0, type_graphql_1.buildSchema)({
            resolvers: [apiResolvers_1.ApiResolvers],
            validate: false,
        }),
        dataSources: () => ({
            apikey: new apiLink_1.LinkApi(),
        }),
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
//# sourceMappingURL=index.js.map
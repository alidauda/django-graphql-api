"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkApi = void 0;
const apollo_datasource_rest_1 = require("apollo-datasource-rest");
class LinkApi extends apollo_datasource_rest_1.RESTDataSource {
    constructor() {
        super();
        this.baseURL = "http://127.0.0.1:8000/api/";
    }
    async getUsers() {
        return this.get(`user`);
    }
    async createUser(user) {
        return this.post(`newuser/`, user);
    }
}
exports.LinkApi = LinkApi;
//# sourceMappingURL=apiLink.js.map
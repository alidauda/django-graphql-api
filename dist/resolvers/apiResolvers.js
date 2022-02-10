"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResolvers = void 0;
const type_graphql_1 = require("type-graphql");
const apiTypes_1 = require("../types/apiTypes");
let ApiResolvers = class ApiResolvers {
    async me(context) {
        const item = await context.dataSources.apikey.getUsers();
        return item;
    }
    async registerUser(shopname, email, context) {
        const userInfo = {
            "email": email,
            "shopname": shopname,
        };
        const user = await context.dataSources.apikey.createUser(userInfo);
        return user;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => apiTypes_1.UserResponse),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ApiResolvers.prototype, "me", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => apiTypes_1.UserResponse),
    __param(0, (0, type_graphql_1.Arg)("shopname")),
    __param(1, (0, type_graphql_1.Arg)("email")),
    __param(2, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], ApiResolvers.prototype, "registerUser", null);
ApiResolvers = __decorate([
    (0, type_graphql_1.Resolver)(apiTypes_1.UserResponse)
], ApiResolvers);
exports.ApiResolvers = ApiResolvers;
//# sourceMappingURL=apiResolvers.js.map
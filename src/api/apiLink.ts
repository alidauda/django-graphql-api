import { RESTDataSource } from "apollo-datasource-rest";

import { UserResponse } from "src/types/apiTypes";

export class LinkApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://127.0.0.1:8000/api/";
  }
  async getUsers():Promise<[UserResponse]> {
    return this.get(`user`);
  }

  async createUser(user:any):Promise<UserResponse>{
    return this.post(`newuser/`,
    user
    )
  }
}

import { Context } from "src/types";
import { Arg, Ctx, Field, Mutation, ObjectType, Query, Resolver } from "type-graphql";
import bcrypt from 'bcrypt';
import { UserResponse } from "../types/apiTypes";






@Resolver(UserResponse)
export class ApiResolvers{
@Query(()=> UserResponse)
    async me(@Ctx() context:Context){
    const item = await context.dataSources.apikey.getUsers()
    
    return item;

}


 @Mutation(()=>UserResponse)
 async registerUser(@Arg("shopname")shopname:string,

 @Arg("email")email:string,
 @Ctx() context:Context
 ){

  const userInfo={
    "email":email,
    "shopname":shopname,
    
  }
   const user = await context.dataSources.apikey.createUser(userInfo)

   return user;
 }

}
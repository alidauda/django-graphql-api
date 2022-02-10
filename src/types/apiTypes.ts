import { Field, ObjectType } from "type-graphql";
@ObjectType()
 class ListOfUsers{
    @Field()
    id: string;
    @Field()
    shopname: string;
    @Field()
    email: string;
    @Field()
    created_at:string;
    @Field()
    updated_at:string;
}

@ObjectType()
 export class UserResponse{
  @Field(()=>[FieldError],{nullable:true})
  errors?:FieldError[];
  @Field(()=>[ListOfUsers],{nullable:true})
  user?:[ListOfUsers];
}

@ObjectType()
class FieldError{
@Field()
field: string;
@Field()
message: string;

}

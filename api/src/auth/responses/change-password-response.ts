import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ChangePasswordResponse {
  @Field()
  userId:string
}

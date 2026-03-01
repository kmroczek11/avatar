import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export default class MinimalUser {
  @Field()
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field({ nullable: true })
  imgSrc?: string;
}
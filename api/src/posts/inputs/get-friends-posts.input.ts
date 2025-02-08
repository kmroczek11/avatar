import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetFriendsPostsInput {
  @Field()
  userId: string;
}

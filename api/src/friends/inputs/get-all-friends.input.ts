import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetAllFriendsInput {
  @Field()
  userId: string;
}

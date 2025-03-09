import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetPostsInput {
  @Field()
  userId: string;
}

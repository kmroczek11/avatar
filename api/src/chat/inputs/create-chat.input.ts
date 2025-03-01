import { Field, InputType } from '@nestjs/graphql';
import { Friend } from 'src/@generated/friend/friend.model';
import { User } from 'src/@generated/user/user.model';

@InputType()
export class CreateChatInput {
  @Field()
  creator: User;

  @Field()
  friend: Friend;
}

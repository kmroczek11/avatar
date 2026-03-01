import { Field, InputType } from '@nestjs/graphql';
import { Friend } from 'src/@generated/friend/friend.model';
import { User } from 'src/@generated/user/user.model';
import MinimalUser from 'src/friends/classes/minimal-user.class';

@InputType()
export class CreateChatInput {
  @Field()
  creator: User;

  @Field()
  friend: MinimalUser;
}

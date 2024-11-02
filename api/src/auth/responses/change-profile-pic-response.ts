import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/@generated/user/user.model';

@ObjectType()
export class ChangeProfilePicResponse {
  @Field()
  expiresIn: string;

  @Field()
  accessToken: string;

  @Field()
  user: User;
}

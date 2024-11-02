import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/@generated/user/user.model';

@ObjectType()
export class ChangePasswordResponse {
  @Field()
  user: User;
}

import { Field, InputType, Int } from '@nestjs/graphql';
import { UserCreaterolesInput } from 'src/@generated/user/user-createroles.input';

@InputType()
export class RegisterUserInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  password: string;
}

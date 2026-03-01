import { Field, InputType, Int } from '@nestjs/graphql';
import { EmailAddressResolver, PhoneNumberResolver } from 'graphql-scalars';

@InputType()
export class RegisterUserInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field(() => EmailAddressResolver)
  email: string;

  @Field()
  password: string;

  @Field(() => PhoneNumberResolver)
  phoneNumber: string;
}

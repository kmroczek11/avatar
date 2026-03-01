import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutMessagesInput } from './user-create-without-messages.input';

@InputType()
export class UserCreateOrConnectWithoutMessagesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phoneNumber'>;

    @Field(() => UserCreateWithoutMessagesInput, {nullable:false})
    @Type(() => UserCreateWithoutMessagesInput)
    create!: UserCreateWithoutMessagesInput;
}

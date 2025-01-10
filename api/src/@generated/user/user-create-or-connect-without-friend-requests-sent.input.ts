import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFriendRequestsSentInput } from './user-create-without-friend-requests-sent.input';

@InputType()
export class UserCreateOrConnectWithoutFriendRequestsSentInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phoneNumber'>;

    @Field(() => UserCreateWithoutFriendRequestsSentInput, {nullable:false})
    @Type(() => UserCreateWithoutFriendRequestsSentInput)
    create!: UserCreateWithoutFriendRequestsSentInput;
}

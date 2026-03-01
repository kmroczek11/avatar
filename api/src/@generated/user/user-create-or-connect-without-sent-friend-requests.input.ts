import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutSentFriendRequestsInput } from './user-create-without-sent-friend-requests.input';

@InputType()
export class UserCreateOrConnectWithoutSentFriendRequestsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phoneNumber'>;

    @Field(() => UserCreateWithoutSentFriendRequestsInput, {nullable:false})
    @Type(() => UserCreateWithoutSentFriendRequestsInput)
    create!: UserCreateWithoutSentFriendRequestsInput;
}

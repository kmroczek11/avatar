import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutReceivedFriendRequestsInput } from './user-create-without-received-friend-requests.input';

@InputType()
export class UserCreateOrConnectWithoutReceivedFriendRequestsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phoneNumber'>;

    @Field(() => UserCreateWithoutReceivedFriendRequestsInput, {nullable:false})
    @Type(() => UserCreateWithoutReceivedFriendRequestsInput)
    create!: UserCreateWithoutReceivedFriendRequestsInput;
}

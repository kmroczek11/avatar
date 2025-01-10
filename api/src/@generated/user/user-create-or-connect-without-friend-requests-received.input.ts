import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFriendRequestsReceivedInput } from './user-create-without-friend-requests-received.input';

@InputType()
export class UserCreateOrConnectWithoutFriendRequestsReceivedInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phoneNumber'>;

    @Field(() => UserCreateWithoutFriendRequestsReceivedInput, {nullable:false})
    @Type(() => UserCreateWithoutFriendRequestsReceivedInput)
    create!: UserCreateWithoutFriendRequestsReceivedInput;
}

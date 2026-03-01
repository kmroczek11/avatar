import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReceivedFriendRequestsInput } from './user-create-without-received-friend-requests.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutReceivedFriendRequestsInput } from './user-create-or-connect-without-received-friend-requests.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutReceivedFriendRequestsInput {

    @Field(() => UserCreateWithoutReceivedFriendRequestsInput, {nullable:true})
    @Type(() => UserCreateWithoutReceivedFriendRequestsInput)
    create?: UserCreateWithoutReceivedFriendRequestsInput;

    @Field(() => UserCreateOrConnectWithoutReceivedFriendRequestsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutReceivedFriendRequestsInput)
    connectOrCreate?: UserCreateOrConnectWithoutReceivedFriendRequestsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phoneNumber'>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFriendRequestsReceivedInput } from './user-create-without-friend-requests-received.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFriendRequestsReceivedInput } from './user-create-or-connect-without-friend-requests-received.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutFriendRequestsReceivedInput {

    @Field(() => UserCreateWithoutFriendRequestsReceivedInput, {nullable:true})
    @Type(() => UserCreateWithoutFriendRequestsReceivedInput)
    create?: UserCreateWithoutFriendRequestsReceivedInput;

    @Field(() => UserCreateOrConnectWithoutFriendRequestsReceivedInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFriendRequestsReceivedInput)
    connectOrCreate?: UserCreateOrConnectWithoutFriendRequestsReceivedInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phoneNumber'>;
}

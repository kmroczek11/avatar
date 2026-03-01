import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReceivedFriendRequestsInput } from './user-create-without-received-friend-requests.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutReceivedFriendRequestsInput } from './user-create-or-connect-without-received-friend-requests.input';
import { UserUpsertWithoutReceivedFriendRequestsInput } from './user-upsert-without-received-friend-requests.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutReceivedFriendRequestsInput } from './user-update-to-one-with-where-without-received-friend-requests.input';

@InputType()
export class UserUpdateOneRequiredWithoutReceivedFriendRequestsNestedInput {

    @Field(() => UserCreateWithoutReceivedFriendRequestsInput, {nullable:true})
    @Type(() => UserCreateWithoutReceivedFriendRequestsInput)
    create?: UserCreateWithoutReceivedFriendRequestsInput;

    @Field(() => UserCreateOrConnectWithoutReceivedFriendRequestsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutReceivedFriendRequestsInput)
    connectOrCreate?: UserCreateOrConnectWithoutReceivedFriendRequestsInput;

    @Field(() => UserUpsertWithoutReceivedFriendRequestsInput, {nullable:true})
    @Type(() => UserUpsertWithoutReceivedFriendRequestsInput)
    upsert?: UserUpsertWithoutReceivedFriendRequestsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phoneNumber'>;

    @Field(() => UserUpdateToOneWithWhereWithoutReceivedFriendRequestsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutReceivedFriendRequestsInput)
    update?: UserUpdateToOneWithWhereWithoutReceivedFriendRequestsInput;
}

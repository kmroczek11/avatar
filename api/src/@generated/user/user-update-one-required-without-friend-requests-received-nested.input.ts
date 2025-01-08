import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFriendRequestsReceivedInput } from './user-create-without-friend-requests-received.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFriendRequestsReceivedInput } from './user-create-or-connect-without-friend-requests-received.input';
import { UserUpsertWithoutFriendRequestsReceivedInput } from './user-upsert-without-friend-requests-received.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutFriendRequestsReceivedInput } from './user-update-to-one-with-where-without-friend-requests-received.input';

@InputType()
export class UserUpdateOneRequiredWithoutFriendRequestsReceivedNestedInput {

    @Field(() => UserCreateWithoutFriendRequestsReceivedInput, {nullable:true})
    @Type(() => UserCreateWithoutFriendRequestsReceivedInput)
    create?: UserCreateWithoutFriendRequestsReceivedInput;

    @Field(() => UserCreateOrConnectWithoutFriendRequestsReceivedInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFriendRequestsReceivedInput)
    connectOrCreate?: UserCreateOrConnectWithoutFriendRequestsReceivedInput;

    @Field(() => UserUpsertWithoutFriendRequestsReceivedInput, {nullable:true})
    @Type(() => UserUpsertWithoutFriendRequestsReceivedInput)
    upsert?: UserUpsertWithoutFriendRequestsReceivedInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email_phoneNumber'>;

    @Field(() => UserUpdateToOneWithWhereWithoutFriendRequestsReceivedInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutFriendRequestsReceivedInput)
    update?: UserUpdateToOneWithWhereWithoutFriendRequestsReceivedInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutSentFriendRequestsInput } from './user-create-without-sent-friend-requests.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutSentFriendRequestsInput } from './user-create-or-connect-without-sent-friend-requests.input';
import { UserUpsertWithoutSentFriendRequestsInput } from './user-upsert-without-sent-friend-requests.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutSentFriendRequestsInput } from './user-update-to-one-with-where-without-sent-friend-requests.input';

@InputType()
export class UserUpdateOneRequiredWithoutSentFriendRequestsNestedInput {

    @Field(() => UserCreateWithoutSentFriendRequestsInput, {nullable:true})
    @Type(() => UserCreateWithoutSentFriendRequestsInput)
    create?: UserCreateWithoutSentFriendRequestsInput;

    @Field(() => UserCreateOrConnectWithoutSentFriendRequestsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSentFriendRequestsInput)
    connectOrCreate?: UserCreateOrConnectWithoutSentFriendRequestsInput;

    @Field(() => UserUpsertWithoutSentFriendRequestsInput, {nullable:true})
    @Type(() => UserUpsertWithoutSentFriendRequestsInput)
    upsert?: UserUpsertWithoutSentFriendRequestsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phoneNumber'>;

    @Field(() => UserUpdateToOneWithWhereWithoutSentFriendRequestsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutSentFriendRequestsInput)
    update?: UserUpdateToOneWithWhereWithoutSentFriendRequestsInput;
}

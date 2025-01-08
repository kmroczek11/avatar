import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFriendRequestsSentInput } from './user-create-without-friend-requests-sent.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFriendRequestsSentInput } from './user-create-or-connect-without-friend-requests-sent.input';
import { UserUpsertWithoutFriendRequestsSentInput } from './user-upsert-without-friend-requests-sent.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutFriendRequestsSentInput } from './user-update-to-one-with-where-without-friend-requests-sent.input';

@InputType()
export class UserUpdateOneRequiredWithoutFriendRequestsSentNestedInput {

    @Field(() => UserCreateWithoutFriendRequestsSentInput, {nullable:true})
    @Type(() => UserCreateWithoutFriendRequestsSentInput)
    create?: UserCreateWithoutFriendRequestsSentInput;

    @Field(() => UserCreateOrConnectWithoutFriendRequestsSentInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFriendRequestsSentInput)
    connectOrCreate?: UserCreateOrConnectWithoutFriendRequestsSentInput;

    @Field(() => UserUpsertWithoutFriendRequestsSentInput, {nullable:true})
    @Type(() => UserUpsertWithoutFriendRequestsSentInput)
    upsert?: UserUpsertWithoutFriendRequestsSentInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email_phoneNumber'>;

    @Field(() => UserUpdateToOneWithWhereWithoutFriendRequestsSentInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutFriendRequestsSentInput)
    update?: UserUpdateToOneWithWhereWithoutFriendRequestsSentInput;
}

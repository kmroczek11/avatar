import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFriendsOfInput } from './user-create-without-friends-of.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFriendsOfInput } from './user-create-or-connect-without-friends-of.input';
import { UserUpsertWithoutFriendsOfInput } from './user-upsert-without-friends-of.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutFriendsOfInput } from './user-update-to-one-with-where-without-friends-of.input';

@InputType()
export class UserUpdateOneRequiredWithoutFriendsOfNestedInput {

    @Field(() => UserCreateWithoutFriendsOfInput, {nullable:true})
    @Type(() => UserCreateWithoutFriendsOfInput)
    create?: UserCreateWithoutFriendsOfInput;

    @Field(() => UserCreateOrConnectWithoutFriendsOfInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFriendsOfInput)
    connectOrCreate?: UserCreateOrConnectWithoutFriendsOfInput;

    @Field(() => UserUpsertWithoutFriendsOfInput, {nullable:true})
    @Type(() => UserUpsertWithoutFriendsOfInput)
    upsert?: UserUpsertWithoutFriendsOfInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phoneNumber'>;

    @Field(() => UserUpdateToOneWithWhereWithoutFriendsOfInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutFriendsOfInput)
    update?: UserUpdateToOneWithWhereWithoutFriendsOfInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFriendsInput } from './user-create-without-friends.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFriendsInput } from './user-create-or-connect-without-friends.input';
import { UserUpsertWithoutFriendsInput } from './user-upsert-without-friends.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutFriendsInput } from './user-update-to-one-with-where-without-friends.input';

@InputType()
export class UserUpdateOneRequiredWithoutFriendsNestedInput {

    @Field(() => UserCreateWithoutFriendsInput, {nullable:true})
    @Type(() => UserCreateWithoutFriendsInput)
    create?: UserCreateWithoutFriendsInput;

    @Field(() => UserCreateOrConnectWithoutFriendsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFriendsInput)
    connectOrCreate?: UserCreateOrConnectWithoutFriendsInput;

    @Field(() => UserUpsertWithoutFriendsInput, {nullable:true})
    @Type(() => UserUpsertWithoutFriendsInput)
    upsert?: UserUpsertWithoutFriendsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phoneNumber'>;

    @Field(() => UserUpdateToOneWithWhereWithoutFriendsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutFriendsInput)
    update?: UserUpdateToOneWithWhereWithoutFriendsInput;
}

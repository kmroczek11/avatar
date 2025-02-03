import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutFriendsOfInput } from './user-update-without-friends-of.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFriendsOfInput } from './user-create-without-friends-of.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutFriendsOfInput {

    @Field(() => UserUpdateWithoutFriendsOfInput, {nullable:false})
    @Type(() => UserUpdateWithoutFriendsOfInput)
    update!: UserUpdateWithoutFriendsOfInput;

    @Field(() => UserCreateWithoutFriendsOfInput, {nullable:false})
    @Type(() => UserCreateWithoutFriendsOfInput)
    create!: UserCreateWithoutFriendsOfInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}

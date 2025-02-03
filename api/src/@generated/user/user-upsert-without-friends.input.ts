import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutFriendsInput } from './user-update-without-friends.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFriendsInput } from './user-create-without-friends.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutFriendsInput {

    @Field(() => UserUpdateWithoutFriendsInput, {nullable:false})
    @Type(() => UserUpdateWithoutFriendsInput)
    update!: UserUpdateWithoutFriendsInput;

    @Field(() => UserCreateWithoutFriendsInput, {nullable:false})
    @Type(() => UserCreateWithoutFriendsInput)
    create!: UserCreateWithoutFriendsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}

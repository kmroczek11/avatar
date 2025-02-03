import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutFriendsOfInput } from './user-update-without-friends-of.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutFriendsOfInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutFriendsOfInput, {nullable:false})
    @Type(() => UserUpdateWithoutFriendsOfInput)
    data!: UserUpdateWithoutFriendsOfInput;
}

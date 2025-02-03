import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutFriendsInput } from './user-update-without-friends.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutFriendsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutFriendsInput, {nullable:false})
    @Type(() => UserUpdateWithoutFriendsInput)
    data!: UserUpdateWithoutFriendsInput;
}

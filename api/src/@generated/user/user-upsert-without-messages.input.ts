import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutMessagesInput } from './user-update-without-messages.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutMessagesInput } from './user-create-without-messages.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutMessagesInput {

    @Field(() => UserUpdateWithoutMessagesInput, {nullable:false})
    @Type(() => UserUpdateWithoutMessagesInput)
    update!: UserUpdateWithoutMessagesInput;

    @Field(() => UserCreateWithoutMessagesInput, {nullable:false})
    @Type(() => UserCreateWithoutMessagesInput)
    create!: UserCreateWithoutMessagesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}

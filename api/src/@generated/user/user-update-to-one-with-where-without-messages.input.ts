import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutMessagesInput } from './user-update-without-messages.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutMessagesInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutMessagesInput, {nullable:false})
    @Type(() => UserUpdateWithoutMessagesInput)
    data!: UserUpdateWithoutMessagesInput;
}

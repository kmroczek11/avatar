import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActiveChatWhereInput } from './active-chat-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyActiveChatArgs {

    @Field(() => ActiveChatWhereInput, {nullable:true})
    @Type(() => ActiveChatWhereInput)
    where?: ActiveChatWhereInput;
}

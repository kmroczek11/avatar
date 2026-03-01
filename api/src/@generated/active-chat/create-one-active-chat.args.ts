import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActiveChatCreateInput } from './active-chat-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneActiveChatArgs {

    @Field(() => ActiveChatCreateInput, {nullable:false})
    @Type(() => ActiveChatCreateInput)
    data!: ActiveChatCreateInput;
}

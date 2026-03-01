import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActiveChatUpdateManyMutationInput } from './active-chat-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ActiveChatWhereInput } from './active-chat-where.input';

@ArgsType()
export class UpdateManyActiveChatArgs {

    @Field(() => ActiveChatUpdateManyMutationInput, {nullable:false})
    @Type(() => ActiveChatUpdateManyMutationInput)
    data!: ActiveChatUpdateManyMutationInput;

    @Field(() => ActiveChatWhereInput, {nullable:true})
    @Type(() => ActiveChatWhereInput)
    where?: ActiveChatWhereInput;
}

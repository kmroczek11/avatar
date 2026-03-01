import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActiveChatUpdateInput } from './active-chat-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ActiveChatWhereUniqueInput } from './active-chat-where-unique.input';

@ArgsType()
export class UpdateOneActiveChatArgs {

    @Field(() => ActiveChatUpdateInput, {nullable:false})
    @Type(() => ActiveChatUpdateInput)
    data!: ActiveChatUpdateInput;

    @Field(() => ActiveChatWhereUniqueInput, {nullable:false})
    @Type(() => ActiveChatWhereUniqueInput)
    where!: Prisma.AtLeast<ActiveChatWhereUniqueInput, 'id'>;
}

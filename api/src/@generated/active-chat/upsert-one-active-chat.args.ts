import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ActiveChatWhereUniqueInput } from './active-chat-where-unique.input';
import { Type } from 'class-transformer';
import { ActiveChatCreateInput } from './active-chat-create.input';
import { ActiveChatUpdateInput } from './active-chat-update.input';

@ArgsType()
export class UpsertOneActiveChatArgs {

    @Field(() => ActiveChatWhereUniqueInput, {nullable:false})
    @Type(() => ActiveChatWhereUniqueInput)
    where!: Prisma.AtLeast<ActiveChatWhereUniqueInput, 'id'>;

    @Field(() => ActiveChatCreateInput, {nullable:false})
    @Type(() => ActiveChatCreateInput)
    create!: ActiveChatCreateInput;

    @Field(() => ActiveChatUpdateInput, {nullable:false})
    @Type(() => ActiveChatUpdateInput)
    update!: ActiveChatUpdateInput;
}

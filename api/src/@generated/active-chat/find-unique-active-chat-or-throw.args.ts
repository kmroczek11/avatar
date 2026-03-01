import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ActiveChatWhereUniqueInput } from './active-chat-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueActiveChatOrThrowArgs {

    @Field(() => ActiveChatWhereUniqueInput, {nullable:false})
    @Type(() => ActiveChatWhereUniqueInput)
    where!: Prisma.AtLeast<ActiveChatWhereUniqueInput, 'id'>;
}

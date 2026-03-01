import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActiveChatWhereInput } from './active-chat-where.input';
import { Type } from 'class-transformer';
import { ActiveChatOrderByWithRelationInput } from './active-chat-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ActiveChatWhereUniqueInput } from './active-chat-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ActiveChatScalarFieldEnum } from './active-chat-scalar-field.enum';

@ArgsType()
export class FindFirstActiveChatOrThrowArgs {

    @Field(() => ActiveChatWhereInput, {nullable:true})
    @Type(() => ActiveChatWhereInput)
    where?: ActiveChatWhereInput;

    @Field(() => [ActiveChatOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ActiveChatOrderByWithRelationInput>;

    @Field(() => ActiveChatWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ActiveChatWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ActiveChatScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ActiveChatScalarFieldEnum>;
}

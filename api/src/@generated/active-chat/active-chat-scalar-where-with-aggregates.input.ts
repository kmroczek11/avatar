import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class ActiveChatScalarWhereWithAggregatesInput {

    @Field(() => [ActiveChatScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ActiveChatScalarWhereWithAggregatesInput>;

    @Field(() => [ActiveChatScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ActiveChatScalarWhereWithAggregatesInput>;

    @Field(() => [ActiveChatScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ActiveChatScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    chatId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    socketId?: StringWithAggregatesFilter;
}

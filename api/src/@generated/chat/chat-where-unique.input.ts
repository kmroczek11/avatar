import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatWhereInput } from './chat-where.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';
import { MessageListRelationFilter } from '../message/message-list-relation-filter.input';

@InputType()
export class ChatWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [ChatWhereInput], {nullable:true})
    AND?: Array<ChatWhereInput>;

    @Field(() => [ChatWhereInput], {nullable:true})
    OR?: Array<ChatWhereInput>;

    @Field(() => [ChatWhereInput], {nullable:true})
    NOT?: Array<ChatWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    isGroup?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    users?: UserListRelationFilter;

    @Field(() => MessageListRelationFilter, {nullable:true})
    messages?: MessageListRelationFilter;
}

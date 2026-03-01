import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereInput } from './message-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { ChatRelationFilter } from '../chat/chat-relation-filter.input';

@InputType()
export class MessageWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [MessageWhereInput], {nullable:true})
    AND?: Array<MessageWhereInput>;

    @Field(() => [MessageWhereInput], {nullable:true})
    OR?: Array<MessageWhereInput>;

    @Field(() => [MessageWhereInput], {nullable:true})
    NOT?: Array<MessageWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    text?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    senderId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    chatId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    sender?: UserRelationFilter;

    @Field(() => ChatRelationFilter, {nullable:true})
    chat?: ChatRelationFilter;
}

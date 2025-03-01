import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActiveChatWhereInput } from './active-chat-where.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class ActiveChatWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => String, {nullable:true})
    socketId?: string;

    @Field(() => [ActiveChatWhereInput], {nullable:true})
    AND?: Array<ActiveChatWhereInput>;

    @Field(() => [ActiveChatWhereInput], {nullable:true})
    OR?: Array<ActiveChatWhereInput>;

    @Field(() => [ActiveChatWhereInput], {nullable:true})
    NOT?: Array<ActiveChatWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    chatId?: StringFilter;
}

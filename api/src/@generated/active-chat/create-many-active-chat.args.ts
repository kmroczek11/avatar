import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActiveChatCreateManyInput } from './active-chat-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyActiveChatArgs {

    @Field(() => [ActiveChatCreateManyInput], {nullable:false})
    @Type(() => ActiveChatCreateManyInput)
    data!: Array<ActiveChatCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

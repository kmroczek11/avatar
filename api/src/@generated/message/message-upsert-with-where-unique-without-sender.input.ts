import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { Type } from 'class-transformer';
import { MessageUpdateWithoutSenderInput } from './message-update-without-sender.input';
import { MessageCreateWithoutSenderInput } from './message-create-without-sender.input';

@InputType()
export class MessageUpsertWithWhereUniqueWithoutSenderInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    @Type(() => MessageWhereUniqueInput)
    where!: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>;

    @Field(() => MessageUpdateWithoutSenderInput, {nullable:false})
    @Type(() => MessageUpdateWithoutSenderInput)
    update!: MessageUpdateWithoutSenderInput;

    @Field(() => MessageCreateWithoutSenderInput, {nullable:false})
    @Type(() => MessageCreateWithoutSenderInput)
    create!: MessageCreateWithoutSenderInput;
}

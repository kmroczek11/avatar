import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { Type } from 'class-transformer';
import { MessageCreateWithoutSenderInput } from './message-create-without-sender.input';

@InputType()
export class MessageCreateOrConnectWithoutSenderInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    @Type(() => MessageWhereUniqueInput)
    where!: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>;

    @Field(() => MessageCreateWithoutSenderInput, {nullable:false})
    @Type(() => MessageCreateWithoutSenderInput)
    create!: MessageCreateWithoutSenderInput;
}

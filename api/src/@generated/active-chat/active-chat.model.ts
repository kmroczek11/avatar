import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

@ObjectType()
export class ActiveChat {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    chatId!: string;

    @Field(() => String, {nullable:false})
    socketId!: string;
}

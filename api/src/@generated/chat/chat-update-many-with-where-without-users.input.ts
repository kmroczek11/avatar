import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatScalarWhereInput } from './chat-scalar-where.input';
import { Type } from 'class-transformer';
import { ChatUpdateManyMutationInput } from './chat-update-many-mutation.input';

@InputType()
export class ChatUpdateManyWithWhereWithoutUsersInput {

    @Field(() => ChatScalarWhereInput, {nullable:false})
    @Type(() => ChatScalarWhereInput)
    where!: ChatScalarWhereInput;

    @Field(() => ChatUpdateManyMutationInput, {nullable:false})
    @Type(() => ChatUpdateManyMutationInput)
    data!: ChatUpdateManyMutationInput;
}

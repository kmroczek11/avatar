import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ChatScalarWhereInput {

    @Field(() => [ChatScalarWhereInput], {nullable:true})
    AND?: Array<ChatScalarWhereInput>;

    @Field(() => [ChatScalarWhereInput], {nullable:true})
    OR?: Array<ChatScalarWhereInput>;

    @Field(() => [ChatScalarWhereInput], {nullable:true})
    NOT?: Array<ChatScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    isGroup?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}

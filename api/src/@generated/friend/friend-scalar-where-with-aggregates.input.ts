import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class FriendScalarWhereWithAggregatesInput {

    @Field(() => [FriendScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FriendScalarWhereWithAggregatesInput>;

    @Field(() => [FriendScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FriendScalarWhereWithAggregatesInput>;

    @Field(() => [FriendScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FriendScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId1?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId2?: StringWithAggregatesFilter;
}

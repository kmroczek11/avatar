import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FriendCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    userId1?: true;

    @Field(() => Boolean, {nullable:true})
    userId2?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

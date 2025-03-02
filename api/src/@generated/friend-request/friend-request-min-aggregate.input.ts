import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FriendRequestMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    creatorId?: true;

    @Field(() => Boolean, {nullable:true})
    receiverId?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;
}

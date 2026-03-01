import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    firstName?: true;

    @Field(() => Boolean, {nullable:true})
    lastName?: true;

    @Field(() => Boolean, {nullable:true})
    email?: true;

    @Field(() => Boolean, {nullable:true})
    password?: true;

    @Field(() => Boolean, {nullable:true})
    phoneNumber?: true;

    @Field(() => Boolean, {nullable:true})
    imgSrc?: true;

    @Field(() => Boolean, {nullable:true})
    roles?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

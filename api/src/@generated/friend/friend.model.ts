import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class Friend {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    userId1!: string;

    @Field(() => String, {nullable:false})
    userId2!: string;

    @Field(() => User, {nullable:false})
    user1?: User;

    @Field(() => User, {nullable:false})
    user2?: User;
}

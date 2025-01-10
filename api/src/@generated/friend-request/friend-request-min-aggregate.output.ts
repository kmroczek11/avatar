import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Status } from '../prisma/status.enum';

@ObjectType()
export class FriendRequestMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    requesterId?: string;

    @Field(() => String, {nullable:true})
    receiverId?: string;

    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
}

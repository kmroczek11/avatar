import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Status } from '../prisma/status.enum';
import { User } from '../user/user.model';

@ObjectType()
export class FriendRequest {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    requesterId!: string;

    @Field(() => String, {nullable:false})
    receiverId!: string;

    @Field(() => Status, {nullable:false,defaultValue:'PENDING'})
    status!: keyof typeof Status;

    @Field(() => User, {nullable:false})
    requester?: User;

    @Field(() => User, {nullable:false})
    receiver?: User;
}

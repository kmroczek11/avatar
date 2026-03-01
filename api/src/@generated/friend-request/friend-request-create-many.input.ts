import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Status } from '../prisma/status.enum';

@InputType()
export class FriendRequestCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    creatorId!: string;

    @Field(() => String, {nullable:false})
    receiverId!: string;

    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
}

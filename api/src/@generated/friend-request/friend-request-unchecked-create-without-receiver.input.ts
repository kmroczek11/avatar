import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Status } from '../prisma/status.enum';

@InputType()
export class FriendRequestUncheckedCreateWithoutReceiverInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    requesterId!: string;

    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
}

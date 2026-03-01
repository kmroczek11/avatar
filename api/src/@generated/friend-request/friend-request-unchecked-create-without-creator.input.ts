import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Status } from '../prisma/status.enum';

@InputType()
export class FriendRequestUncheckedCreateWithoutCreatorInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    receiverId!: string;

    @Field(() => Status, {nullable:true})
    status?: keyof typeof Status;
}

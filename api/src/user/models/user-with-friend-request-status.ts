import { ObjectType, Field } from '@nestjs/graphql';
import { Status } from 'src/@generated/prisma/status.enum';
import { User as PrismaUser } from 'src/@generated/user/user.model';

@ObjectType()
export class UserWithFriendRequestStatus extends PrismaUser {
    @Field(() => Status, { nullable: true })
    friendRequestStatus?: string;
}

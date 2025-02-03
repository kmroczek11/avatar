import {
    HttpException,
    HttpStatus,
    Injectable,
} from '@nestjs/common';
import { FriendRequest } from 'src/@generated/friend-request/friend-request.model';
import { SendFriendRequestInput } from './inputs/send-friend-request.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { AcceptFriendRequestInput } from './inputs/accept-friend-request.input';
import { GetPendingRequestsInput } from './inputs/get-pending-requests.input';
import { RejectFriendRequestInput } from './inputs/reject-friend-request.input';
import { CancelFriendRequestInput } from './inputs/cancel-friend-request.input';
import { Friend } from 'src/@generated/friend/friend.model';

@Injectable()
export class FriendsService {
    constructor(private prisma: PrismaService) { }

    async sendFriendRequest(sendFriendRequestInput: SendFriendRequestInput): Promise<FriendRequest> {
        const { creatorId, receiverId } = sendFriendRequestInput;

        if (creatorId === receiverId) {
            throw new HttpException('Can\'t send friend request to yourself', HttpStatus.BAD_REQUEST);
        }

        return await this.prisma.friendRequest.create({
            data: sendFriendRequestInput,
        });
    }

    async acceptFriendRequest(acceptFriendRequestInput: AcceptFriendRequestInput): Promise<Friend> {
        const { creatorId, receiverId } = acceptFriendRequestInput;

        await this.prisma.friendRequest.update({
            where: {
                creatorId_receiverId: { creatorId, receiverId }
            },
            data: {
                status: 'ACCEPTED',
            },
        });

        return await this.prisma.friend.create({
            data: {
              userId1: creatorId,
              userId2: receiverId
            }
          });
    }

    async getPendingRequests(getPendingRequestsInput: GetPendingRequestsInput): Promise<FriendRequest[]> {
        const { receiverId } = getPendingRequestsInput;

        return await this.prisma.friendRequest.findMany({
            where: {
                receiverId,
                status: 'PENDING',
            },
        });
    }

    async rejectFriendRequest(rejectFriendRequestInput: RejectFriendRequestInput): Promise<FriendRequest> {
        const { creatorId, receiverId } = rejectFriendRequestInput;

        return await this.prisma.friendRequest.update({
            where: {
                creatorId_receiverId: { creatorId, receiverId }
            },
            data: {
                status: 'REJECTED',
            },
        });
    }

    async cancelFriendRequest(cancelFriendRequestInput: CancelFriendRequestInput): Promise<FriendRequest> {
        const { creatorId, receiverId } = cancelFriendRequestInput;

        return await this.prisma.friendRequest.update({
            where: {
                creatorId_receiverId: { creatorId, receiverId }
            },
            data: {
                status: 'CANCELED',
            },
        });
    }
}
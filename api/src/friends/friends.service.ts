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
import { Prisma } from '@prisma/client'
import { FriendRequestWithCreator } from './types/friendRequestWithCreator.type';
import { GetAllFriendsInput } from './inputs/get-all-friends.input';
import { Status } from 'src/@generated/prisma/status.enum';

type PartialUser = Pick<Prisma.UserSelect, 'id' | 'firstName' | 'lastName' | 'imgSrc'>;

@Injectable()
export class FriendsService {
    constructor(private prisma: PrismaService) { }

    async sendFriendRequest(sendFriendRequestInput: SendFriendRequestInput): Promise<FriendRequest> {
        const { creatorId, receiverId } = sendFriendRequestInput;

        if (creatorId === receiverId) {
            throw new HttpException("Can't send a friend request to yourself", HttpStatus.BAD_REQUEST);
        }

        const existingRequest = await this.prisma.friendRequest.findFirst({
            where: {
                OR: [
                    { creatorId, receiverId },
                    { creatorId: receiverId, receiverId: creatorId },
                ],
            },
        });

        if (existingRequest) {
            switch (existingRequest.status) {
                case Status.PENDING:
                case Status.ACCEPTED:
                    throw new HttpException("Friend request already sent or exists", HttpStatus.CONFLICT);
                case Status.CANCELED:
                case Status.REJECTED:
                    return await this.prisma.friendRequest.update({
                        where: { id: existingRequest.id },
                        data: { status: Status.PENDING },
                    });
                default:
                    throw new HttpException("Unexpected status", HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return await this.prisma.friendRequest.create({
            data: {
                creatorId,
                receiverId,
                status: Status.PENDING,
            },
        });
    }

    async acceptFriendRequest(acceptFriendRequestInput: AcceptFriendRequestInput): Promise<Friend> {
        const { creatorId, receiverId } = acceptFriendRequestInput;

        await this.prisma.friendRequest.update({
            where: {
                creatorId_receiverId: { creatorId, receiverId }
            },
            data: {
                status: Status.ACCEPTED,
            },
        });

        return await this.prisma.friend.create({
            data: {
                userId1: creatorId,
                userId2: receiverId
            }
        });
    }

    async getPendingRequests(getPendingRequestsInput: GetPendingRequestsInput): Promise<FriendRequestWithCreator[]> {
        const { receiverId } = getPendingRequestsInput;

        return await this.prisma.friendRequest.findMany({
            where: {
                receiverId,
                status: Status.PENDING,
            },
            include: {
                creator: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        imgSrc: true
                    } as PartialUser,
                },
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
                status: Status.REJECTED,
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
                status: Status.CANCELED,
            },
        });
    }

    async getAllFriends(getAllFriendsInput: GetAllFriendsInput) {
        const { userId } = getAllFriendsInput;

        const friends = await this.prisma.friend.findMany({
            where: {
                OR: [{ userId1: userId }, { userId2: userId }],
            },
            include: {
                user1: { select: { id: true, firstName: true, lastName: true, imgSrc: true } },
                user2: { select: { id: true, firstName: true, lastName: true, imgSrc: true } },
            },
        });

        return friends.map((friend) =>
            friend.userId1 === userId ? friend.user2 : friend.user1
        );
    }
}
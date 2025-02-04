import { Status } from '@prisma/client'

export type FriendRequestWithCreator = {
    id: string;
    creatorId: string;
    receiverId: string;
    status: Status;
    creator: {
        id: string;
        firstName: string;
        lastName: string;
        imgSrc: string;
    };
};
import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetChatInput } from './inputs/get-chat.input';
import { GetUserChatsInput } from './inputs/get-user-chats.input';
import { GetUsersInChatInput } from './inputs/get-users-in-chat.input';
import { CreateChatInput } from './inputs/create-chat.input';
import { JoinChatInput } from './inputs/join-chat.input';

@Injectable()
export class ChatService {
    constructor(private readonly prisma: PrismaService) { }

    async getChat(getChatInput: GetChatInput) {
        const { creatorId, friendId } = getChatInput;

        return await this.prisma.chat.findFirst({
            where: {
                users: {
                    every: {
                        id: { in: [creatorId, friendId] },
                    },
                },
            },
            include: {
                users: true,
            },
        });
    }

    async createChat(createChatInput: CreateChatInput) {
        const { creator, friend } = createChatInput;

        const chat = await this.getChat({ creatorId: creator.id, friendId: friend.id })

        if (chat) {
            throw new ConflictException('Chat already exists between these users');
        }

        return this.prisma.chat.create({
            data: {
                users: {
                    connect: [{ id: creator.id }, { id: friend.id }],
                },
            },
            include: {
                users: true,
            },
        });
    }

    async getUserChats(getUserChats: GetUserChatsInput) {
        const { userId } = getUserChats;

        return this.prisma.chat.findMany({
            where: { users: { some: { id: userId } } },
            include: { users: true, messages: { orderBy: { createdAt: 'desc' } } },
        });
    }

    async getUsersInChat(getUsersInChatInput: GetUsersInChatInput) {
        const { chatId } = getUsersInChatInput;

        const chat = await this.prisma.chat.findUnique({
            where: { id: chatId },
            include: {
                users: true,
            },
        });

        if (!chat) {
            throw new NotFoundException(`Chat with ID ${chatId} not found`);
        }

        return chat.users;
    }

    async joinChat(joinChatInput: JoinChatInput) {
        const { creatorId, friendId, socketId } = joinChatInput;

        const chat = await this.getChat({ creatorId, friendId })

        if (!chat) {
            throw new NotFoundException(`Chat not found for creatorId: ${creatorId} and friendId: ${friendId}`);
        }

        const activeChat = await this.prisma.activeChat.findFirst({
            where: {
                userId: creatorId,
                chatId: chat.id,
            },
        });

        if (activeChat) {
            await this.prisma.activeChat.delete({
                where: {
                    id: activeChat.id
                }
            })

            return this.prisma.activeChat.create({
                data: {
                    userId: creatorId,
                    chatId: chat.id,
                    socketId
                }
            })
        } else {
            return this.prisma.activeChat.create({
                data: {
                    userId: creatorId,
                    chatId: chat.id,
                    socketId
                }
            })
        }
    }
}

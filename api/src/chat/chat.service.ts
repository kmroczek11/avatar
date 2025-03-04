import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetChatInput } from './inputs/get-chat.input';
import { CreateChatInput } from './inputs/create-chat.input';
import { JoinChatInput } from './inputs/join-chat.input';
import { Message } from 'src/@generated/message/message.model';
import { MessageCreateInput } from 'src/@generated/message/message-create.input';

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

    async getUserChats(userId: string) {
        return await this.prisma.chat.findMany({
            where: { users: { some: { id: userId } } },
            include: { users: true, messages: { orderBy: { createdAt: 'desc' } } },
        });
    }

    async getChatsWithUsers(userId: string) {
        const chats = await this.getUserChats(userId)

        return chats.map((chat) => ({
            ...chats,
            users: chat.users
        }))
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

    async leaveChat(socketId: string) {
        const activeChat = await this.prisma.activeChat.findUnique({
            where: { socketId }
        });

        if (!activeChat) return null

        return this.prisma.activeChat.delete({ where: { socketId } })
    }

    async getActiveUsers(chatId: string) {
        return await this.prisma.activeChat.findMany({
            where: { chatId },
        })
    }

    async createMessage(message: MessageCreateInput) {
        return await this.prisma.message.create({ data: message })
    }

    async getMessages(chatId: string) {
        return await this.prisma.message.findMany({
            where: { chatId },
            orderBy: { createdAt: 'asc' },
        });
    }


    // Note: Would remove below in production - helper methods
    async removeActiveChats() {
        return this.prisma.activeChat.deleteMany()
    }

    async removeMessages() {
        return await this.prisma.message.deleteMany()
    }

    async removeChats() {
        return await this.prisma.chat.deleteMany()
    }
}

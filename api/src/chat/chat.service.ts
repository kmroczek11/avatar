import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetChatInput } from './inputs/get-chat.input';
import { CreateChatInput } from './inputs/create-chat.input';
import { JoinChatInput } from './inputs/join-chat.input';
import { Message } from 'src/@generated/message/message.model';
import { MessageCreateInput } from 'src/@generated/message/message-create.input';
import { CreateMessageInput } from './inputs/create-message.input';
import { LeaveChatInput } from './inputs/leave-chat.input';

@Injectable()
export class ChatService {
    constructor(private readonly prisma: PrismaService) { }

    async getChat(getChatInput: GetChatInput) {
        const { creatorId, friendId } = getChatInput

        return this.prisma.chat.findFirst({
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

        if (chat) return

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
        return this.prisma.chat.findMany({
            where: { users: { some: { id: userId } } },
            include: { users: true, messages: { orderBy: { createdAt: 'asc' } } },
        });
    }

    async getChatsWithUsers(userId: string) {
        const chats = await this.getUserChats(userId)

        return chats.map((chat) => ({
            ...chat,
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
            where: { userId: creatorId, socketId }
        });

        if (!activeChat) {
            return this.prisma.activeChat.create({
                data: {
                    userId: creatorId,
                    chatId: chat.id,
                    socketId
                }
            });
        }

        return activeChat;
    }

    async leaveChat(leaveChatInput: LeaveChatInput) {
        const { chatId, socketId } = leaveChatInput

        return this.prisma.activeChat.deleteMany({
            where: {
                chatId,
                socketId
            }
        });
    }

    async getActiveUsers(chatId: string) {
        return this.prisma.activeChat.findMany({
            where: { chatId },
        })
    }

    async createMessage(createMessageInput: CreateMessageInput) {
        const { text, createdAt, senderId, chatId } = createMessageInput

        return this.prisma.message.create({
            data: {
                text: text,
                createdAt: createdAt || new Date(),
                sender: { connect: { id: senderId } },
                chat: { connect: { id: chatId } },
            },
            include: { sender: true, chat: true },
        });
    }

    async getMessages(chatId: string) {
        return this.prisma.message.findMany({
            where: { chatId },
            orderBy: { createdAt: 'asc' },
            include: { sender: true, chat: true },
        });
    }


    // Note: Would remove below in production - helper methods
    async removeActiveChats() {
        return this.prisma.activeChat.deleteMany()
    }

    async removeMessages() {
        return this.prisma.message.deleteMany()
    }

    async removeChats() {
        return this.prisma.chat.deleteMany()
    }
}

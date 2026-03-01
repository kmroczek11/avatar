import { OnModuleDestroy, OnModuleInit, UseGuards } from '@nestjs/common';
import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { AuthService } from 'src/auth/auth.service';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';
import { ChatService } from '../chat.service';
import { Message } from 'src/@generated/message/message.model';
import { ActiveChat } from 'src/@generated/active-chat/active-chat.model';
import { Friend } from 'src/@generated/friend/friend.model';
import MinimalUser from 'src/friends/classes/minimal-user.class';

@WebSocketGateway({ cors: { origin: ['http://localhost:3000'] } })
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect, OnModuleInit {
  constructor(private authService: AuthService, private chatService: ChatService) { }

  // Note: Runs when server starts - remove in production
  async onModuleInit() {
    await this.chatService.removeActiveChats()
    await this.chatService.removeMessages()
    await this.chatService.removeChats()
  }

  @WebSocketServer()
  server: Server

  @UseGuards(GqlAuthGuard)
  async handleConnection(socket: Socket) {
    console.log('connection made')

    const jwt = socket.handshake.headers.authorization || null

    const user = await this.authService.getJwtUser(jwt)

    if (!user) {
      this.handleDisconnect(socket)
    } else {
      socket.data.user = user
      this.getChats(socket, user.id)
    }
  }

  async getChats(socket: Socket, userId: string) {
    const chats = await this.chatService.getChatsWithUsers(userId)

    this.server.to(socket.id).emit('chats', chats)
  }

  handleDisconnect(socket: Socket) {
    console.log('disconnected')

    this.chatService.leaveChat({ chatId: socket.data.chatId, socketId: socket.id })
  }

  @SubscribeMessage('createChat')
  async createChat(socket: Socket, friend: MinimalUser) {
    await this.chatService.createChat({ creator: socket.data.user, friend })
    await this.getChats(socket, socket.data.user.id);
  }

  @SubscribeMessage('sendMessage')
  async handleMessage(socket: Socket, newMessage: Message) {
    const { user } = socket.data
    newMessage.sender = user

    if (newMessage.chatId) {
      const { id, text, createdAt, senderId, chatId } = newMessage

      const message = await this.chatService.createMessage({
        id,
        createdAt,
        text,
        senderId,
        chatId
      })

      newMessage.id = message.id

      const activeChats = await this.chatService.getActiveUsers(newMessage.chatId)

      activeChats.forEach((activeChat: ActiveChat) => {
        console.log('emit', newMessage)
        this.server.to(activeChat.socketId).emit('newMessage', newMessage)
      })
    }
  }

  @SubscribeMessage('joinChat')
  async joinChat(socket: Socket, [friendId, chatId]: [string, string]) {
    socket.data.chatId = chatId
    const activeChat = await this.chatService.joinChat({ friendId, creatorId: socket.data.user.id, socketId: socket.id })
    const messages = await this.chatService.getMessages(activeChat.chatId)
    this.server.to(socket.id).emit('messages', messages)
  }

  @SubscribeMessage('leaveChat')
  async leaveChat(socket: Socket, chatId: string) {
    this.chatService.leaveChat({ chatId, socketId: socket.id })
  }
}

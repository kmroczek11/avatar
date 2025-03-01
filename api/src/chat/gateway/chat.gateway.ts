import { UseGuards } from '@nestjs/common';
import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';

@WebSocketGateway({ cors: { origin: ['http://localhost:3000'] } })
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server

  @UseGuards(GqlAuthGuard)
  handleConnection() {
    console.log('connection made')
  }

  handleDisconnect() {
    console.log('disconnected')
  }

  @SubscribeMessage('sendMessage')
  handleMessage(socket: Socket, message: string) {
    this.server.emit('newMessage', message)
  }
}

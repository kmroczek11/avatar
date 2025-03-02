import { Module } from '@nestjs/common';
import { ChatGateway } from './gateway/chat.gateway';
import { ChatService } from './chat.service';

@Module({
  providers: [ChatGateway, ChatService]
})
export class ChatModule {}

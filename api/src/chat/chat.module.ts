import { Module } from '@nestjs/common';
import { ChatGateway } from './gateway/chat.gateway';
import { ChatService } from './chat.service';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [AuthModule],
  providers: [ChatGateway, ChatService, PrismaService]
})
export class ChatModule { }

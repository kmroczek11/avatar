import { Module } from '@nestjs/common';
import { FriendsService } from './friends.service';
import { FriendsResolver } from './friends.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [FriendsService, FriendsResolver, PrismaService],
  exports: [FriendsService],
})
export class FriendsModule {}

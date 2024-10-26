import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User } from '@prisma/client';
import { UserCreateInput } from 'src/@generated/user/user-create.input';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(createUserInput: UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data: createUserInput,
    });
  }

  async findOneById(id: string, options?: any): Promise<User> {
    return this.prisma.user.findUnique({ where: { id }, ...options });
  }

  async findOneByEmail(email: string, options?: any): Promise<User> {
    return this.prisma.user.findUnique({ where: { email }, ...options });
  }
}

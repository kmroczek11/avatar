import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, User } from '@prisma/client';
import { UserCreateInput } from 'src/@generated/user/user-create.input';
import { FindByNameInput } from './inputs/find-by-name.input';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) { }

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

  async findOneByPhoneNumber(phoneNumber: string, options?: any) {
    return this.prisma.user.findUnique({ where: { phoneNumber }, ...options });
  }

  async updateById(id: string, data: any): Promise<User> {
    await this.prisma.user.update({ where: { id }, data });
    return this.prisma.user.findUnique({ where: { id } });
  }

  async updateByEmail(email: string, data: any): Promise<User> {
    await this.prisma.user.update({ where: { email }, data });
    return this.prisma.user.findUnique({ where: { email } });
  }

  async findByName(findByNameInput: FindByNameInput) {
    const { name, creatorId } = findByNameInput;

    const searchTerms = name.trim().split(" ");

    const whereClause: Prisma.UserWhereInput =
      searchTerms.length > 1
        ? {
          AND: [
            { firstName: { contains: searchTerms[0], mode: 'insensitive' } },
            { lastName: { contains: searchTerms[1], mode: 'insensitive' } },
          ],
        }
        : {
          OR: [
            { firstName: { contains: name, mode: 'insensitive' } },
            { lastName: { contains: name, mode: 'insensitive' } },
          ],
        };

    const users = await this.prisma.user.findMany({
      where: whereClause,
      select: {
        id: true,
        firstName: true,
        lastName: true,
        imgSrc: true,
        friendRequestsReceived: {
          where: { creatorId },
          select: { status: true },
        },
      },
    });

    return users.map((user) => ({
      ...user,
      friendRequestStatus: user.friendRequestsReceived.length ? user.friendRequestsReceived[0].status : null,
    }));
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { RedisPrefixEnum } from './enums/redis-prefix-enum';
import { RedisRepository } from './redis.repository';
import { User } from 'src/@generated/user/user.model';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RedisService {
    constructor(
        @Inject(RedisRepository) 
        private readonly redisRepository: RedisRepository,
        private readonly configService: ConfigService
    ) {}

    async saveUser(userId: string, user: User): Promise<void> {
        await this.redisRepository.setWithExpiry(
            RedisPrefixEnum.USER,
            userId,
            JSON.stringify(user),
            this.configService.get('accessTokenExpiration'),
        );
    }

    async getUser(userId: string): Promise<User | null> {
        const product = await this.redisRepository.get(RedisPrefixEnum.USER, userId);
        return JSON.parse(product);
    }

    async saveAccessToken(userId: string, token: string): Promise<void> {
        await this.redisRepository.setWithExpiry(
            RedisPrefixEnum.ACCESS_TOKEN,
            token,
            userId,
            this.configService.get('accessTokenExpiration'),
        );
    }

    async getAccessToken(token: string): Promise<string | null> {
        return await this.redisRepository.get(RedisPrefixEnum.ACCESS_TOKEN, token);
    }
}
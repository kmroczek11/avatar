
import { Controller, Get, Param, Post } from '@nestjs/common';
import { User } from 'src/@generated/user/user.model';
import { RedisService } from 'src/redis/redis.service';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly redisService: RedisService
    ) { }

    @Get('/getUser/:userId')
    getUser(@Param() params: any): Promise<User | null> {
        return this.redisService.getUser(params.userId);
    }

    @Get('/getAccessToken/:userId')
    getAccessToken(@Param() params: any): Promise<string | null> {
        return this.redisService.getAccessToken(params.userId);
    }
}

import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { AuthResolver } from './auth.resolver';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LogInStrategy } from './strategies/logIn.strategy';
import { JwtModule } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
import { AutoLoginStrategy } from './strategies/autoLogin.strategy';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { RedisModule } from 'src/redis/redis.module';
import { MailModule } from 'src/mail/mail.module';

dotenv.config();

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.ACCESS_TOKEN_SECRET,
      signOptions: { expiresIn: process.env.ACCESS_TOKEN_EXPIRATION },
    }),
    RedisModule,
    MailModule
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    AuthResolver,
    LogInStrategy,
    AutoLoginStrategy,
    JwtStrategy,
  ],
})
export class AuthModule { }

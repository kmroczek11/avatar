import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { AuthResolver } from './auth.resolver';
import { Upload } from 'src/auth/helpers/upload.scalar';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LoginStrategy } from './strategies/login.strategy';
import { JwtModule } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
import { AutoLoginStrategy } from './strategies/autoLogin.strategy';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { RedisModule } from 'src/redis/redis.module';

dotenv.config();

@Module({
  imports: [
    UserModule,
    PassportModule,
    Upload,
    JwtModule.register({
      secret: process.env.ACCESS_TOKEN_SECRET,
      signOptions: { expiresIn: process.env.ACCESS_TOKEN_EXPIRATION },
    }),
    RedisModule
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    AuthResolver,
    LoginStrategy,
    AutoLoginStrategy,
    JwtStrategy,
  ],
})
export class AuthModule { }

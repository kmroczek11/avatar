import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { TokenPayload } from '../types/tokenPayload.type';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService,private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get('accessTokenSecret'),
    });
  }

  async validate({ sub, email }: TokenPayload, done) {
    const user = await this.userService.findOneById(sub);

    if (!user) {
      throw new UnauthorizedException('User from access token doesn\'t exists');
    }

    done(null, user);
  }
}

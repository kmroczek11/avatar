import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { TokenPayload } from '../types/tokenPayload.type';

@Injectable()
export class AutoLoginStrategy extends PassportStrategy(Strategy, 'autoLogin') {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.ACCESS_TOKEN_SECRET,
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

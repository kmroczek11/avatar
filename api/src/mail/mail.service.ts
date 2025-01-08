import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendForgotPassword(email: string, password: string) {
    await this.mailerService.sendMail({
      to: email,
      subject: 'Nowe hasło',
      template: './forgotPassword',
      context: {
        password,
      },
    });
  }
}

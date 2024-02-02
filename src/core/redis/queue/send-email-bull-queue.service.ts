import { Injectable } from '@nestjs/common';

import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

type SendEmailBullQueueRequest = {
  name: string;
  email: string;
};

@Injectable()
export class SendEmailBullQueueService {
  constructor(
    @InjectQueue('SEND_EMAIL_BULL_QUEUE') private sendEmailBullQueue: Queue,
  ) {}

  async execute({ name, email }: SendEmailBullQueueRequest) {
    await this.sendEmailBullQueue.add('SEND_EMAIL_BULL_QUEUE', { name, email });
  }
}

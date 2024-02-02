import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';

import { SendEmailBullQueueService } from './queue/send-email-bull-queue.service';
import { SendEmailBullConsumerService } from './consumer/send-email-bull-consumer.service';
import { NodeMailerModule } from '../nodemailer/nodemailer.module';

@Module({
  imports: [
    BullModule.registerQueue({ name: 'SEND_EMAIL_BULL_QUEUE' }),
    NodeMailerModule,
  ],
  controllers: [],
  providers: [SendEmailBullQueueService, SendEmailBullConsumerService],
  exports: [SendEmailBullQueueService],
})
export class RedisModule {}

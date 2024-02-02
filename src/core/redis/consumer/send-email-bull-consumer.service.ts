import {
  OnQueueActive,
  OnQueueCompleted,
  OnQueueFailed,
  Process,
  Processor,
} from '@nestjs/bull';
import { Job } from 'bull';
import { Logger } from '@nestjs/common';

import { NodeMailerService } from '../../../core/nodemailer/nodemailer.service';

type SendEmailBullConsumerRequest = {
  name: string;
  email: string;
};

@Processor('SEND_EMAIL_BULL_QUEUE')
export class SendEmailBullConsumerService {
  private readonly logger = new Logger(SendEmailBullConsumerService.name);

  constructor(private readonly sendEmailService: NodeMailerService) {}

  @Process('SEND_EMAIL_BULL_QUEUE')
  async execute({ data }: Job<SendEmailBullConsumerRequest>) {
    console.log('aqui');
    const { email, name } = data;
    await this.sendEmailService.execute({ name, email });
  }

  @OnQueueActive()
  onActive(job: Job<SendEmailBullConsumerRequest>) {
    this.logger.log(`Redis -> Bull -> Ativo ${job.id}`);
  }

  @OnQueueFailed()
  async onQueueFailed(job: Job<SendEmailBullConsumerRequest>, err: Error) {
    this.logger.log(`Redis -> Bull -> Falha ${job.id} -> ${err}`);
  }

  @OnQueueCompleted()
  async onQueueCompleted(job: Job<SendEmailBullConsumerRequest>) {
    this.logger.log(`Redis -> Bull -> Completo ${job.id}`);
    console.log(`Completo`, job.id);
  }
}

import { Test, TestingModule } from '@nestjs/testing';

import { SendEmailBullConsumerService } from './send-email-bull-consumer.service';

describe('SendEmailBullConsumerService', () => {
  let service: SendEmailBullConsumerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SendEmailBullConsumerService],
    }).compile();

    service = module.get<SendEmailBullConsumerService>(
      SendEmailBullConsumerService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';

import { SendEmailBullQueueService } from './send-email-bull-queue.service';

describe('SendEmailBullQueueService', () => {
  let service: SendEmailBullQueueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SendEmailBullQueueService],
    }).compile();

    service = module.get<SendEmailBullQueueService>(SendEmailBullQueueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

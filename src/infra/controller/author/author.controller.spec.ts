import { Test, TestingModule } from '@nestjs/testing';
import { AuthorController } from './author.controller';
<<<<<<< HEAD
import { AuthorService } from '../../../domain/author/service/author.service';
=======
import { AuthorService } from '../../../author/service/author.service';
>>>>>>> feat: start of nestjs configuration with author and book test

describe('AuthorController', () => {
  let controller: AuthorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthorController],
      providers: [AuthorService],
    }).compile();

    controller = module.get<AuthorController>(AuthorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

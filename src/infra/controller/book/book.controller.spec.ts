import { Test, TestingModule } from '@nestjs/testing';
import { BookController } from './book.controller';
<<<<<<< HEAD
import { BookService } from '../../../domain/book/service/book.service';
=======
import { BookService } from '../../../book/service/book.service';
>>>>>>> feat: start of nestjs configuration with author and book test

describe('BookController', () => {
  let controller: BookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookController],
      providers: [BookService],
    }).compile();

    controller = module.get<BookController>(BookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Module } from '@nestjs/common';

import { BookService } from '../../application/book/service/book.service';
import { BookController } from '../../../infra/controller/book/book.controller';
import { BookRepository } from '../../../infra/database/repository/book.repository';

@Module({
  controllers: [BookController],
  providers: [
    BookService,
    {
      provide: 'BookInterfaceRepository',
      useClass: BookRepository,
    },
  ],
  exports: [BookService],
})
export class BookModule {}

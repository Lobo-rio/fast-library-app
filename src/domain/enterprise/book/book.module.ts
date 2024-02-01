import { Module } from '@nestjs/common';

import { BookService } from '../../application/book/service/book.service';
import { BookController } from '../../../infra/controller/book/book.controller';
import { DatabaseModule } from 'src/infra/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [BookService],
  controllers: [BookController],
  exports: [BookService],
})
export class BookModule {}

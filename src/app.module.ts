import { Module } from '@nestjs/common';
<<<<<<< HEAD
import { BookModule } from './domain/book/book.module';
import { AuthorModule } from './domain/author/author.module';

@Module({
  imports: [BookModule, AuthorModule],
=======
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';

@Module({
  imports: [AuthorModule, BookModule],
>>>>>>> feat: start of nestjs configuration with author and book test
  controllers: [],
  providers: [],
})
export class AppModule {}

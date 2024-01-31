import { Module } from '@nestjs/common';
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';

@Module({
  imports: [AuthorModule, BookModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

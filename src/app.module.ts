import { Module } from '@nestjs/common';
import { BookModule } from './domain/book/book.module';
import { AuthorModule } from './domain/author/author.module';

@Module({
  imports: [BookModule, AuthorModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

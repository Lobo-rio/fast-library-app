import { Module } from '@nestjs/common';
import { AuthorService } from './service/author.service';
import { AuthorController } from '../../infra/controller/author/author.controller';

@Module({
  controllers: [AuthorController],
  providers: [AuthorService],
})
export class AuthorModule {}

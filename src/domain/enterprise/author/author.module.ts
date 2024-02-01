import { Module } from '@nestjs/common';

import { AuthorService } from '../../application/author/service/author.service';
import { AuthorController } from '../../../infra/controller/author/author.controller';

import { DatabaseModule } from '../../../infra/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [AuthorService],
  controllers: [AuthorController],
  exports: [AuthorService],
})
export class AuthorModule {}

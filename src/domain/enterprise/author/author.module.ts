import { Module } from '@nestjs/common';

import { AuthorService } from '../../application/author/service/author.service';
import { AuthorController } from '../../../infra/controller/author/author.controller';

import { DatabaseModule } from '../../../infra/database/database.module';
import { NodeMailerModule } from '../../../core/nodemailer/nodemailer.module';

@Module({
  imports: [DatabaseModule, NodeMailerModule],
  providers: [AuthorService],
  controllers: [AuthorController],
  exports: [AuthorService],
})
export class AuthorModule {}

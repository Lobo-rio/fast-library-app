import { Module } from '@nestjs/common';

import { AuthorService } from '../../application/author/service/author.service';
import { AuthorController } from '../../../infra/controller/author/author.controller';
import { AuthorRepository } from '../../../infra/database/repository/author.repository';

@Module({
  controllers: [AuthorController],
  providers: [
    AuthorService,
    {
      provide: 'AuthorInterfaceRepository',
      useClass: AuthorRepository,
    },
  ],
  exports: [AuthorService],
})
export class AuthorModule {}

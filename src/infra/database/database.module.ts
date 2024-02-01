import { Module } from '@nestjs/common';

import { PrismaService } from './prisma/prisma.service';
import { BookRepository } from './repository/book.repository';
import { AuthorRepository } from './repository/author.repository';
import { BookInterfaceRepository } from '../../domain/enterprise/repository/book-interface.repository';
import { AuthorInterfaceRepository } from '../../domain/enterprise/repository/author-interface.repository';

@Module({
  imports: [],
  providers: [
    PrismaService,
    {
      provide: BookInterfaceRepository,
      useClass: BookRepository,
    },
    {
      provide: AuthorInterfaceRepository,
      useClass: AuthorRepository,
    },
  ],
  exports: [PrismaService, AuthorInterfaceRepository, BookInterfaceRepository],
})
export class DatabaseModule {}

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BookRepository {
  constructor(private readonly repository: PrismaService) {}
}

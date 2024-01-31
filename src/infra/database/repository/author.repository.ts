import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthorRepository {
  constructor(private readonly repository: PrismaService) {}
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import { BookInterfaceRepository } from '../../../domain/enterprise/repository/book-interface.repository';
import { Book, Prisma } from '@prisma/client';

@Injectable()
export class BookRepository implements BookInterfaceRepository {
  constructor(private readonly repository: PrismaService) {}

  async findMany(skip: number, take: number): Promise<Book[]> {
    return await this.repository.book.findMany({
      skip,
      take,
    });
  }

  async findById(id: Prisma.BookWhereUniqueInput): Promise<Book> {
    return await this.repository.book.findUnique({
      where: id,
    });
  }

  async create(data: Prisma.BookCreateInput): Promise<Book> {
    return await this.repository.book.create({
      data,
    });
  }

  async update(
    where: Prisma.BookWhereUniqueInput,
    data: Prisma.BookUpdateInput,
  ): Promise<Book> {
    return await this.repository.book.update({
      data,
      where,
    });
  }

  async delete(where: Prisma.BookWhereUniqueInput): Promise<void> {
    await this.repository.book.delete({
      where,
    });
  }
}

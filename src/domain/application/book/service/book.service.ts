import { Injectable, NotFoundException } from '@nestjs/common';
import { Book, Prisma } from '@prisma/client';

import { BookInterfaceRepository } from '../../../../domain/enterprise/repository/book-interface.repository';

@Injectable()
export class BookService {
  constructor(private readonly repository: BookInterfaceRepository) {}

  async findMany(skip: number, take: number): Promise<Book[]> {
    return await this.repository.findMany(skip, take);
  }

  async findById(id: Prisma.BookWhereUniqueInput): Promise<Book> {
    const bookExisted = await this.repository.findById(id);

    if (!bookExisted) throw new NotFoundException('Book is not registered!');

    return bookExisted;
  }

  async create(data: Prisma.BookCreateInput): Promise<Book> {
    return await this.repository.create(data);
  }

  async update(
    where: Prisma.BookWhereUniqueInput,
    data: Prisma.BookUpdateInput,
  ): Promise<Book> {
    const bookExisted = await this.findById(where);

    if (!bookExisted)
      throw new NotFoundException(
        'There is no book registered with this identifier',
      );

    return await this.repository.update(where, data);
  }

  async delete(where: Prisma.BookWhereUniqueInput): Promise<void> {
    await this.repository.delete(where);
  }
}

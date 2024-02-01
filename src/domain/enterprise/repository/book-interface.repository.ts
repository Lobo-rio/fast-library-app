import { Book, Prisma } from '@prisma/client';

export abstract class BookInterfaceRepository {
  abstract findMany(skip: number, take: number): Promise<Book[]>;
  abstract findById(id: Prisma.BookWhereUniqueInput): Promise<Book>;
  abstract create(data: Prisma.BookCreateInput): Promise<Book>;
  abstract update(
    where: Prisma.BookWhereUniqueInput,
    data: Prisma.BookUpdateInput,
  ): Promise<Book>;
  abstract delete(where: Prisma.BookWhereUniqueInput): Promise<void>;
}

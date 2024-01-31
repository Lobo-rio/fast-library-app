import { Book, Prisma } from '@prisma/client';

export interface BookInterfaceRepository {
  findMany(skip: number, take: number): Promise<Book[]>;
  findById(id: Prisma.BookWhereUniqueInput): Promise<Book>;
  create(data: Prisma.BookCreateInput): Promise<Book>;
  update(
    where: Prisma.BookWhereUniqueInput,
    data: Prisma.BookUpdateInput,
  ): Promise<Book>;
  delete(where: Prisma.BookWhereUniqueInput): Promise<void>;
}

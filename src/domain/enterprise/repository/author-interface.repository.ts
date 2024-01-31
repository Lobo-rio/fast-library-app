import { Author, Prisma } from '@prisma/client';

export interface AuthorInterfaceRepository {
  findMany(skip: number, take: number): Promise<Author[]>;
  findById(id: Prisma.AuthorWhereUniqueInput): Promise<Author>;
  findByEmail(email: Prisma.AuthorWhereUniqueInput): Promise<Author>;
  create(data: Prisma.AuthorCreateInput): Promise<Author>;
  update(
    where: Prisma.AuthorWhereUniqueInput,
    data: Prisma.AuthorUpdateInput,
  ): Promise<Author>;
  delete(where: Prisma.AuthorWhereUniqueInput): Promise<void>;
}

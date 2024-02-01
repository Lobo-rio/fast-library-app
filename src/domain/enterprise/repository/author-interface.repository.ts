import { Author, Prisma } from '@prisma/client';

export abstract class AuthorInterfaceRepository {
  abstract findMany(skip: number, take: number): Promise<Author[]>;
  abstract findById(id: Prisma.AuthorWhereUniqueInput): Promise<Author>;
  abstract findByEmail(email: Prisma.AuthorWhereUniqueInput): Promise<Author>;
  abstract create(data: Prisma.AuthorCreateInput): Promise<Author>;
  abstract update(
    where: Prisma.AuthorWhereUniqueInput,
    data: Prisma.AuthorUpdateInput,
  ): Promise<Author>;
  abstract delete(where: Prisma.AuthorWhereUniqueInput): Promise<void>;
}

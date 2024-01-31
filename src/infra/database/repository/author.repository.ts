import { Injectable } from '@nestjs/common';
import { Author, Prisma } from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';
import { AuthorInterfaceRepository } from '../../../domain/enterprise/repository/author-interface.repository';

@Injectable()
export class AuthorRepository implements AuthorInterfaceRepository {
  constructor(private readonly repository: PrismaService) {}

  async findMany(skip: number, take: number): Promise<Author[]> {
    return await this.repository.author.findMany({
      skip,
      take,
    });
  }

  async findById(id: Prisma.AuthorWhereUniqueInput): Promise<Author> {
    return await this.repository.author.findUnique({
      where: id,
    });
  }

  async findByEmail(email: Prisma.AuthorWhereUniqueInput): Promise<Author> {
    return await this.repository.author.findUnique({
      where: email,
    });
  }

  async create(data: Prisma.AuthorCreateInput): Promise<Author> {
    return await this.repository.author.create({
      data,
    });
  }

  async update(
    where: Prisma.AuthorWhereUniqueInput,
    data: Prisma.AuthorUpdateInput,
  ): Promise<Author> {
    return await this.repository.author.update({
      data,
      where,
    });
  }

  async delete(where: Prisma.AuthorWhereUniqueInput): Promise<void> {
    await this.repository.author.delete({
      where,
    });
  }
}

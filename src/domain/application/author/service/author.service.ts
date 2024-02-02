import { Injectable, NotFoundException } from '@nestjs/common';
import { Author, Prisma } from '@prisma/client';

import { AuthorInterfaceRepository } from '../../../../domain/enterprise/repository/author-interface.repository';

@Injectable()
export class AuthorService {
  constructor(private readonly repository: AuthorInterfaceRepository) {}

  async findMany(skip: number, take: number): Promise<Author[]> {
    return await this.repository.findMany(skip, take);
  }

  async findById(id: Prisma.AuthorWhereUniqueInput): Promise<Author> {
    const authorExisted = await this.repository.findById(id);

    if (!authorExisted)
      throw new NotFoundException('Author is not registered!');

    return authorExisted;
  }

  async findByEmail(email: Prisma.AuthorWhereUniqueInput): Promise<Author> {
    const authorExisted = await this.repository.findByEmail(email);

    if (!authorExisted)
      throw new NotFoundException('Author with this email is not registered!');

    return authorExisted;
  }

  async create(data: Prisma.AuthorCreateInput): Promise<Author> {
    const authorExisted = await this.repository.findByEmail({
      email: data.email,
    });

    if (authorExisted)
      throw new NotFoundException(
        'This email appears in the registration of another Author',
      );

    return await this.repository.create(data);
  }

  async update(
    where: Prisma.AuthorWhereUniqueInput,
    data: Prisma.AuthorUpdateInput,
  ): Promise<Author> {
    const authorExisted = await this.findById(where);

    if (!authorExisted)
      throw new NotFoundException(
        'There is no author registered with this identifier',
      );

    return await this.repository.update(where, data);
  }

  async delete(where: Prisma.AuthorWhereUniqueInput): Promise<void> {
    await this.repository.delete(where);
  }
}

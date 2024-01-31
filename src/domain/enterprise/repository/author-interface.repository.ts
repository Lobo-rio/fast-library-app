import { Author } from '@prisma/client';

import { CreateAuthorDto } from '../../../domain/application/author/dto/create-author.dto';
import { UpdateAuthorDto } from '../../../domain/application/author/dto/update-author.dto';

export interface AuthorInterfaceRepository {
  findMany(): Promise<Author[]>;
  findById(id: string): Promise<Author>;
  findByEmail(email: string): Promise<Author>;
  create(data: CreateAuthorDto): Promise<Author>;
  update(id: string, data: UpdateAuthorDto): Promise<Author>;
  softDelete(id: string): Promise<void>;
}

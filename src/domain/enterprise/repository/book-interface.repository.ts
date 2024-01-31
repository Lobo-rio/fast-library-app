import { Book } from '@prisma/client';

import { CreateBookDto } from '../../application/book/dto/create-book.dto';
import { UpdateBookDto } from '../../application/book/dto/update-book.dto';

export interface BookInterfaceRepository {
  findMany(): Promise<Book[]>;
  findById(id: string): Promise<Book>;
  findByEmail(email: string): Promise<Book>;
  create(data: CreateBookDto): Promise<Book>;
  update(id: string, data: UpdateBookDto): Promise<Book>;
  softDelete(id: string): Promise<void>;
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
<<<<<<< HEAD
import { BookService } from '../../../domain/book/service/book.service';
import { CreateBookDto } from '../../../domain/book/dto/create-book.dto';
import { UpdateBookDto } from '../../../domain/book/dto/update-book.dto';
=======
import { BookService } from '../../../book/service/book.service';
import { CreateBookDto } from '../../../book/dto/create-book.dto';
import { UpdateBookDto } from '../../../book/dto/update-book.dto';
>>>>>>> feat: start of nestjs configuration with author and book test

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @Get()
  findAll() {
    return this.bookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update(+id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookService.remove(+id);
  }
}

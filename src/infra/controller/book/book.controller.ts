import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Book } from '@prisma/client';

import { BookService } from '../../../domain/application/book/service/book.service';

import { CreateBookDto } from '../../../domain/application/book/dto/create-book.dto';
import { UpdateBookDto } from '../../../domain/application/book/dto/update-book.dto';

import { IndexTodoSwagger } from '../../../helpers/swagger/book/index-todo-swagger';
import { BadRequestSwagger } from '../../../helpers/errors/badrequest.swagger';
import { NotFoundSwagger } from '../../../helpers/errors/not-found.swagger';

@Controller('app/v1/book')
@ApiTags('Books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get(':id')
  @ApiOperation({ summary: 'List book' })
  @ApiResponse({
    status: 200,
    description: 'List of book returned successfully',
    type: IndexTodoSwagger,
    isArray: true,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid parameters',
    type: BadRequestSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Order not found',
    type: NotFoundSwagger,
  })
  async findById(@Param('id', new ParseUUIDPipe()) id: string): Promise<Book> {
    return this.bookService.findById({ id });
  }

  @Get(':skip/:take')
  @ApiOperation({ summary: 'Lists books' })
  @ApiResponse({
    status: 200,
    description: 'Lists of books returned successfully',
    type: IndexTodoSwagger,
    isArray: true,
  })
  async findMany(
    @Param('skip') skip: number,
    @Param('take') take: number,
  ): Promise<Book[]> {
    return this.bookService.findMany(+skip, +take);
  }

  @Post()
  @ApiOperation({ summary: 'List book' })
  @ApiResponse({
    status: 200,
    description: 'List of book returned successfully',
    type: IndexTodoSwagger,
    isArray: true,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid parameters',
    type: BadRequestSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Order not found',
    type: NotFoundSwagger,
  })
  create(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.bookService.create({
      title: createBookDto.title,
      content: createBookDto.content,
      published: createBookDto.published,
    });
  }

  @Patch(':id')
  @ApiOperation({ summary: 'List book' })
  @ApiResponse({
    status: 200,
    description: 'List of book returned successfully',
    type: IndexTodoSwagger,
    isArray: true,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid parameters',
    type: BadRequestSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Order not found',
    type: NotFoundSwagger,
  })
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateBookDto: UpdateBookDto,
  ): Promise<Book> {
    return this.bookService.update({ id }, updateBookDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'List book' })
  @ApiResponse({
    status: 400,
    description: 'Invalid parameters',
    type: BadRequestSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Order not found',
    type: NotFoundSwagger,
  })
  delete(@Param('id', new ParseUUIDPipe()) id: string): Promise<void> {
    return this.bookService.delete({ id });
  }
}

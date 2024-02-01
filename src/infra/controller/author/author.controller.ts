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
import { Author } from '@prisma/client';

import { AuthorService } from '../../../domain/application/author/service/author.service';
import { CreateAuthorDto } from '../../../domain/application/author/dto/create-author.dto';
import { UpdateAuthorDto } from '../../../domain/application/author/dto/update-author.dto';

import { IndexTodoSwagger } from '../../../helpers/swagger/author/index-todo-swagger';
import { BadRequestSwagger } from '../../../helpers/errors/badrequest.swagger';
import { NotFoundSwagger } from '../../../helpers/errors/not-found.swagger';

@Controller('app/v1/author')
@ApiTags('Authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Get(':id')
  @ApiOperation({ summary: 'List author' })
  @ApiResponse({
    status: 200,
    description: 'List of author returned successfully',
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
  async findById(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<Author> {
    return this.authorService.findById({ id });
  }

  @Get('byEmail/:email')
  @ApiOperation({ summary: 'List author' })
  @ApiResponse({
    status: 200,
    description: 'List of author returned successfully',
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
  async findByEmail(@Param('email') email: string): Promise<Author> {
    return this.authorService.findByEmail({ email });
  }

  @Get(':skip/:take')
  @ApiOperation({ summary: 'Lists authors' })
  @ApiResponse({
    status: 200,
    description: 'Lists of authors returned successfully',
    type: IndexTodoSwagger,
    isArray: true,
  })
  async findMany(
    @Param('skip') skip: number,
    @Param('take') take: number,
  ): Promise<Author[]> {
    return this.authorService.findMany(skip, take);
  }

  @Post()
  @ApiOperation({ summary: 'List author' })
  @ApiResponse({
    status: 200,
    description: 'List of author returned successfully',
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
  create(@Body() createAuthorDto: CreateAuthorDto): Promise<Author> {
    return this.authorService.create(createAuthorDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'List author' })
  @ApiResponse({
    status: 200,
    description: 'List of author returned successfully',
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
    @Body() updateAuthorDto: UpdateAuthorDto,
  ): Promise<Author> {
    return this.authorService.update({ id }, updateAuthorDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'List author' })
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
    return this.authorService.delete({ id });
  }
}

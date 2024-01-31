import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
<<<<<<< HEAD
import { AuthorService } from '../../../domain/author/service/author.service';
import { CreateAuthorDto } from '../../../domain/author/dto/create-author.dto';
import { UpdateAuthorDto } from '../../../domain/author/dto/update-author.dto';
=======
import { AuthorService } from '../../../author/service/author.service';
import { CreateAuthorDto } from '../../../author/dto/create-author.dto';
import { UpdateAuthorDto } from '../../../author/dto/update-author.dto';
>>>>>>> feat: start of nestjs configuration with author and book test

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post()
  create(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorService.create(createAuthorDto);
  }

  @Get()
  findAll() {
    return this.authorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthorDto: UpdateAuthorDto) {
    return this.authorService.update(+id, updateAuthorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authorService.remove(+id);
  }
}

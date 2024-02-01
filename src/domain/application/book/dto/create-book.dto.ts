import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateBookDto {
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(40)
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(160)
  content: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  published: boolean;
}

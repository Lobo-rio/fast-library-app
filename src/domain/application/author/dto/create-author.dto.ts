import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateAuthorDto {
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(40)
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  @MinLength(5)
  @MaxLength(120)
  email: string;
}

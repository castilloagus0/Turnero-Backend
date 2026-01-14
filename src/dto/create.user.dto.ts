import {
    IsDate,
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength
} from "class-validator";

import { Type } from "class-transformer";

export class CreateUserDto {

  @IsString()
  @MinLength(2)
  @MaxLength(15)
  nombre: string;
  
  @IsString()
  @MinLength(2)
  @MaxLength(15)
  apellido: string;
  
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  telefono: string;

  @IsString()
  @MinLength(6)
  @MaxLength(50)
  password: string;

  @Type(() => Date)
  @IsDate()
  nacimiento: Date;
}



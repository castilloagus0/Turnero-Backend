import {
    IsDate,
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
  IsOptional
} from "class-validator";

import { Type } from "class-transformer";

import { PartialType, OmitType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./create.user.dto";

export class EditUserDto extends PartialType(
  OmitType(CreateUserDto, ['password'] as const)
) {
  @IsOptional()
  @IsString()
  @MinLength(6)
  @MaxLength(50)
  password?: string;
}

//Lo que hace esto es tomar el Dto del CreateUser y 'omitir' la password, ya que modificar la password lo hacemos en otro endpoint

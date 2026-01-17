import {
  IsString,
  MaxLength,
  MinLength
} from "class-validator";

export class ReseetPasswordDto {
  @IsString()
  @MinLength(6)
  @MaxLength(50)
  newPassword: string;
}



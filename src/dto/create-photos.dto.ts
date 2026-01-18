import {
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";

export class CreatePhotoDto {

  @IsString()
  @MinLength(10)
  @MaxLength(200)
  url: string;
}



import {
    IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";

export class ReviewDto {

  @IsString()
  @MinLength(10)
  @MaxLength(200)
  comentario: string;

  @IsNumber()
  calificacion: number;
}



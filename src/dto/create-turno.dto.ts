import {
    IsNumber,
  IsString,
  IsOptional
} from "class-validator";

export class CreateTurnoDto {

  @IsString()
  horaInicio: string;

  @IsString()
  horaFin: string;

  @IsNumber()
  usuarioId: number;

  @IsNumber()
  servicioId: number;

  @IsNumber()
  tipoPagoId: number;

  @IsOptional()
  @IsNumber()
  reseniaId: number | null; // Este campo es opcional porque no tiene reseña al momento de la creación del turno
}



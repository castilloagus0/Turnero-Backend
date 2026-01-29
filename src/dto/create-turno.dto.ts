import {
    IsNumber,
  IsString,
  IsOptional,
  Matches
} from "class-validator";

export class CreateTurnoDto {
  @IsString()
  @Matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/, {
    message: 'horaInicio must be in format hh:mm:ss'
  })  
  horaInicio: string;
  
  @Matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/, {
    message: 'horaInicio must be in format hh:mm:ss'
  })  
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



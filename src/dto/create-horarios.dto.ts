import {
  IsString,
  Matches
} from "class-validator";

export class CreateHorariosDto {

    @IsString()
    @Matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/, {
        message: 'horaInicio must be in format hh:mm:ss'
    })
    horaInicio: string;

    @IsString()
    @Matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/, {
        message: 'horaFin must be in format hh:mm:ss'
    })
    horaFin: string;
}



import { Injectable } from '@nestjs/common';
import { StateTurnoStrategy } from 'src/interface/State.interface';
import { Turnos } from 'src/entity/turno.entity';

@Injectable()
export class EstadoIniciado implements StateTurnoStrategy {
  
    iniciar(turno: Turnos): string {
        turno.estado = 'INICIADO';
        return 'El turno se a iniciado correctamente';
    }

    cancelar(turno: Turnos): string {
        return '';
    }

    finalizar(turno: Turnos): string {
        return '';
    }
}
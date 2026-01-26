import { Injectable } from '@nestjs/common';
import { StateTurnoStrategy } from 'src/interface/State.interface';
import { Turnos } from 'src/entity/turno.entity';

@Injectable()
export class EstadoFinalizado implements StateTurnoStrategy {
  
    iniciar(turno: Turnos): string {
        turno.estado = 'INICIADO';
        return 'El turno se a iniciado correctamente';
    }

    cancelar(turno: Turnos): string {
        return '';
    }

    finalizar(turno: Turnos): string {
        turno.estado = 'FINALIZADO';
        return 'El turno se ha finalizado correctamente';
    }

    // cancelar(turno: Turnos): string {
    //     const nuevoEstado = new HistorialEstado();
    //     nuevoEstado.horaInicio = new Date().toTimeString().slice(0, 8);
    //     nuevoEstado.horaFin = new Date().toTimeString().slice(0, 8);
    //     turno.estado = nuevoEstado;
    //     return 'El turno ha sido cancelado exitosamente.';
    // }

    // finalizar(turno: Turnos): string {
    //     const nuevoEstado = new HistorialEstado();
    //     nuevoEstado.horaInicio = new Date().toTimeString().slice(0, 8);
    //     nuevoEstado.horaFin = new Date().toTimeString().slice(0, 8);
    //     turno.estado = nuevoEstado;
    //     return 'El turno ha sido finalizado exitosamente.';
    // }
}
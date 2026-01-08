import { Injectable } from '@nestjs/common';
import { StateTurnoStrategy } from 'src/interface/State.interface';
import { Turnos } from 'src/entity/turno.entity';
import { HistorialEstado } from 'src/entity/historialEstado.entity';

@Injectable()
export class EstadoIniciado implements StateTurnoStrategy {
  
    iniciar(turno: Turnos): string {
        return 'El turno ya ha sido iniciado.';
    }

    cancelar(turno: Turnos): string {
        const nuevoEstado = new HistorialEstado();
        nuevoEstado.horaInicio = new Date().toTimeString().slice(0, 8);
        nuevoEstado.horaFin = new Date().toTimeString().slice(0, 8);
        turno.estado = nuevoEstado;
        return 'El turno ha sido cancelado exitosamente.';
    }

    finalizar(turno: Turnos): string {
        const nuevoEstado = new HistorialEstado();
        nuevoEstado.horaInicio = new Date().toTimeString().slice(0, 8);
        nuevoEstado.horaFin = new Date().toTimeString().slice(0, 8);
        turno.estado = nuevoEstado;
        return 'El turno ha sido finalizado exitosamente.';
    }
}
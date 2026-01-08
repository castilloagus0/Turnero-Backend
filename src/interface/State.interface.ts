import { Turnos } from "src/entity/turno.entity";

export interface StateTurnoStrategy {
    iniciar(turno: Turnos): string;

    cancelar(turno: Turnos): string;

    finalizar(turno: Turnos): string;
}
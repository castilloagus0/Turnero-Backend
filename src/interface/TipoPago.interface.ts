import { Turnos } from "src/entity/turno.entity";

export interface TipoPagoStrategy {
    procesarPago(monto: number, turno: Turnos): string;

    verificarEstadoPago(preferencia: String): boolean;

    getNombre(): string;
}
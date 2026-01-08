import { Injectable } from "@nestjs/common";
import { TipoPagoStrategy } from "src/interface/TipoPago.interface";

@Injectable()
export class PagoMercadoPagoStrategy implements TipoPagoStrategy {
    procesarPago(monto: number, turno: any): string {
        // Lógica para procesar el pago con MercadoPago
        return `Pago de ${monto} procesado con MercadoPago para el turno ${turno.id}`;
    }

    verificarEstadoPago(preferencia: String): boolean {
        // Lógica para verificar el estado del pago con MercadoPago
        return true; // Simulación de verificación exitosa
    }

    getNombre(): string {
        return "MercadoPago";
    }
}
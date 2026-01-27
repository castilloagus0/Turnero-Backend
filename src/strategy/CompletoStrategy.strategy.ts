// corte-cejas.strategy.ts
import { Injectable } from '@nestjs/common';
import { ServicioStrategy } from '../interface/servicioB.interface';


@Injectable()
export class CorteCompleto implements ServicioStrategy {
  
    seleccionarTurno(): void {}

    getNombre(): string {
        return 'Corte y Cejas';
    }

    getPrecio(): number {
        return 6000; 
    }

    getDuracionAproximada(): number {
        return 25; 
    }

    getServicioActivo(): boolean {
        return true
    }
}
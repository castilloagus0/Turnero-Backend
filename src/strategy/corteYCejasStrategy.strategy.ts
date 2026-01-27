// corte-cejas.strategy.ts
import { Injectable } from '@nestjs/common';
import { ServicioStrategy } from '../interface/servicioB.interface';


@Injectable()
export class CorteCejasStrategy implements ServicioStrategy {
  
    seleccionarTurno(): void {}

    getNombre(): string {
        return 'Corte y Cejas';
    }

    getPrecio(): number {
        return 5000; 
    }

    getDuracionAproximada(): number {
        return 20; 
    }

    getServicioActivo(): boolean {
        return true
    }
}
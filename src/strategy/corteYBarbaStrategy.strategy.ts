// corte-cejas.strategy.ts
import { Injectable } from '@nestjs/common';
import { ServicioStrategy } from '../interface/servicioB.interface';


@Injectable()
export class CorteBarbaStrategy implements ServicioStrategy {
  
    seleccionarTurno(): void {}

    getNombre(): string {
        return 'Corte y Cejas';
    }

    getPrecio(): number {
        return 5500; 
    }

    getDuracionAproximada(): number {
        return 25; 
    }

     getServicioActivo(): boolean {
        return true
    }
}
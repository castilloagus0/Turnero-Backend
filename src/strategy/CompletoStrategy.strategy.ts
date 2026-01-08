// corte-cejas.strategy.ts
import { Injectable } from '@nestjs/common';
import { ServicioStrategy } from '../interface/servicioB.interface';


@Injectable()
export class ServicioCompleto implements ServicioStrategy {
  
    seleccionarTurno(): void {}

    getNombre(): string {
        return 'Corte y Cejas';
    }

    getPrecio(): number {
        return 1; 
    }

    getDuracionAproximada(): number {
        return 1; 
    }
}
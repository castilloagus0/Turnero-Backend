import { ChildEntity } from 'typeorm';
import { ServicioB } from './servicesBarberia.entity';

@ChildEntity()
export class CorteYCejas extends ServicioB {
  seleccionarTurno(): void {
    console.log(`Seleccionando turno para el servicio: ${this.nombre}`);
  }

  getNombre(): string {
    return this.nombre;
  }

  getPrecio(): Number {
    return this.precio;
  }

  getDuracionAproximada(): Number {
    return this.duracionAproximada;
  }
}
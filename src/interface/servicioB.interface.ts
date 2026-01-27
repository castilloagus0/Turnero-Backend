import { Turnos } from 'src/entity/turno.entity';

export interface ServicioStrategy {
    seleccionarTurno(turno: Turnos): void;

    getNombre(): string;

    getPrecio(): number;

    getDuracionAproximada(): number;

     getServicioActivo(): boolean; 

}
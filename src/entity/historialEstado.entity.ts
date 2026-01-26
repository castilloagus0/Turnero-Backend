import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Turnos } from './turno.entity';

@Entity('historialEstado')
export class HistorialEstado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: ['INICIADO', 'CANCELADO', 'FINALIZADO'], default: 'PENDIENTE' })
  estado: string;
  
  @Column({ type: 'time' })
  horaInicio: string;

  @Column({ type: 'time' })
  horaFin: string;

  @OneToMany(() => Turnos, (turno) => turno.estado)
  @JoinColumn({ name: 'turno_id' })
  turno: Turnos;
  
}
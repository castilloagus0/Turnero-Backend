import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { OneToMany } from 'typeorm';
import { Turnos } from './turno.entity';

@Entity('horarios')
export class Horarios {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'time' })
  horaInicio: string;

  @Column({ type: 'time' })
  horaFin: string;

  @OneToMany(() => Turnos, (turno) => turno.horario)
  turnos: Turnos[];
}
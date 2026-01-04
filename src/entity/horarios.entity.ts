import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('horarios')
export class Horarios {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'time', length: 50 })
  horaInicio: Date;

  @Column({ type: 'time', length: 50 })
  horaFin: Date;

}
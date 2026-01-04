import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Horarios } from './horarios.entity';
import { Usuario } from './usuario.entity';


@Entity('turnos')
export class Turnos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'datetime', nullable: false })
  fecha: Date;

  @Column({ type: 'varchar', length: 100 })
  horario: Horarios

  @Column({ type: 'varchar', length: 100 })
  usuario: Usuario

  //Esto creo que va con los joinColumns


}
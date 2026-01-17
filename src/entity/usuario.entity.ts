import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { OneToMany } from 'typeorm';
import { Turnos } from './turno.entity';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  nombre: string;

  @Column({ type: 'varchar', length: 50 })
  apellido: string;

  @Column({ type: 'varchar', length: 50, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 50 })
  telefono: string;

  @Column({ type: 'varchar', length: 70 })
  password: string;

  @Column({ type: 'date', nullable: false })
  nacimiento: Date;

  @Column({ type: 'varchar', length: 20 })
  rol: string;

  @OneToMany(() => Turnos, (turno) => turno.usuario)
  turnos: Turnos[];

  @CreateDateColumn()
  fechaRegistro: Date;

}
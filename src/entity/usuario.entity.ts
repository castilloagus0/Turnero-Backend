import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column({ type: 'varchar', length: 20 })
  rol: string;

  @Column({ type: 'varchar', length: 70 })
  password: string;

  @Column({ type: 'datetime', nullable: false })
  nacimiento: Date;
}
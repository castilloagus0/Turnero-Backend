import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('serviciosBarberia')
export abstract class ServicioB {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  nombre: string;

  @Column({ type: 'number', length: 50, nullable: false })
  precio: Number;

  @Column({ type: 'number', length: 50 })
  duracionAproximada: Number;

  abstract seleccionarTurno(): void;

  abstract getNombre(): string;

  abstract getPrecio(): Number;

  abstract getDuracionAproximada(): Number;
}
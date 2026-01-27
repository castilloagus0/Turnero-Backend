import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('serviciosBarberia')
export class AbstractServicioB {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  nombre: string;
  
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  precio: number; 

  @Column({ type: 'int' })
  duracionAproximada: number; 

  @Column({ type: 'boolean' })
  activo: boolean;
}


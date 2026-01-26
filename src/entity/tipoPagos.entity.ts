import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tipoPagos')
export class TipoPagos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  nombre: string;  
}
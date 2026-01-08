import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('pago')
export class PagoAbstract {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50})
  nombreTipoPago: string;
}


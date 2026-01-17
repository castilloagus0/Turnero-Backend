import { Column, Entity, OneToMany, PrimaryGeneratedColumn, JoinColumn, CreateDateColumn } from 'typeorm';
import { Usuario } from './usuario.entity';
import { Turnos } from './turno.entity';


@Entity('resenias')
export class Resenias {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Usuario, (usuario) => usuario.id)
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @Column({ type: 'int' })
  calificacion: number;
    
  @Column({ type: 'varchar', length: 255 })
  comentario: string;

  @CreateDateColumn({ type: 'datetime' })
  fechaRegistro: Date;
  
  @OneToMany(() => Turnos, (turno) => turno.id)
  @JoinColumn({ name: 'turno_id' })
  turno: Turnos;
}
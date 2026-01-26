import { Column, Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Horarios } from './horarios.entity';
import { Usuario } from './usuario.entity';
import { Resenias } from './resenia.entity';
import { HistorialEstado } from './historialEstado.entity';

@Entity('turnos')
export class Turnos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'datetime', nullable: false })
  fecha: Date;

  @Column({ type: 'enum', enum: ['PENDIENTE', 'INICIADO', 'CANCELADO', 'FINALIZADO'], default: 'PENDIENTE' })
  estado: string;

  @ManyToOne(() => Horarios, (horario) => horario.turnos)
  @JoinColumn({ name: 'horario_id' })
  horario: Horarios;

  @ManyToOne(() => Usuario, (usuario) => usuario.turnos)
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @ManyToOne(() => Resenias, (resenia) => resenia.turno, { nullable: true })
  @JoinColumn({ name: 'resenia_id' })
  resenia: Resenias | null;

  // @OneToMany(() => HistorialEstado, (historial) => historial.turno)
  // estado: HistorialEstado;

}
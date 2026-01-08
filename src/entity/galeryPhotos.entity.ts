import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('galeryPhotos')
export class GaleryPhotos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  url: string;
}
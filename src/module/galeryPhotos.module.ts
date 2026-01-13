import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GaleryPhotos } from '../entity/galeryPhotos.entity';
import { HttpModule } from '@nestjs/axios';
import { GaleryPhotosService } from '../service/galeryPhotos.service';
import { GaleryPhotosController } from '../controller/galeryPhotos.controller';
import { GaleryPhotosRepository } from 'src/repository/galeryPhotos.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([GaleryPhotos]),
    HttpModule,
  ],
  providers: [GaleryPhotosService, GaleryPhotosRepository],
  controllers: [GaleryPhotosController],
})
export class GaleryPhotosModule {}
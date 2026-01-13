import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { HistorialEstado} from '../entity/historialEstado.entity';
import { HistorialEstadoController } from '../controller/historialEstado.controller';
import { HistorialEstadoService } from '../service/historialEstado.service';
import { HistorialEstadoRepository } from 'src/repository/historialEstado.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([HistorialEstado]),
    HttpModule,
  ],
  providers: [HistorialEstadoService, HistorialEstadoRepository],
  controllers: [HistorialEstadoController],
})
export class HistorialEstadoModule {}
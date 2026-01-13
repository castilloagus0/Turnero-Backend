import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { Horarios } from '../entity/horarios.entity';
import { HorariosController } from 'src/controller/horarios.controller';
import { HorariosService } from 'src/service/horarios.service';
import { HorariosRepository } from 'src/repository/horarios.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Horarios]),
    HttpModule,
  ],
  providers: [HorariosService, HorariosRepository],
  controllers: [HorariosController],
})
export class HorariosModule {}
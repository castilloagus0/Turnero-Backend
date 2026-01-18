import { Module, Res } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { SBarberiaController } from 'src/controller/servicesBarberia.controller';
import { SBarberiaService } from 'src/service/servicesBarberia.service';
import { SBarberiaRepository } from 'src/repository/servicesBarberia.repository';
import { AbstractServicioB } from 'src/entity/servicesBarberia.entity';
import { CorteCejasStrategy } from 'src/strategy/corteYCejasStrategy.strategy';
import { CorteBarbaStrategy } from 'src/strategy/corteYBarbaStrategy.strategy';
import { CorteTradicional } from 'src/strategy/CorteTradicionalStrategy.strategy';
import { CorteCompleto } from 'src/strategy/CompletoStrategy.strategy';


@Module({
  imports: [
    TypeOrmModule.forFeature([AbstractServicioB]),
    HttpModule,
  ],
  providers: [SBarberiaService, SBarberiaRepository, CorteCejasStrategy, CorteBarbaStrategy, CorteTradicional, CorteCompleto],
  controllers: [SBarberiaController],
})
export class SBarberiaModule {}
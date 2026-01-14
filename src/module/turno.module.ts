import { Module, Res } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { Turnos } from 'src/entity/turno.entity';
import { TurnoController } from 'src/controller/turno.controller';
import { TurnoService } from 'src/service/turno.service';
import { TurnoRepository } from 'src/repository/turno.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Turnos]),
    HttpModule,
  ],
  providers: [TurnoService, TurnoRepository],
  controllers: [TurnoController],
})
export class TurnoModule {}
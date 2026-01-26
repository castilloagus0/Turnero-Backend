import { Module, Res } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { Turnos } from 'src/entity/turno.entity';
import { TurnoController } from 'src/controller/turno.controller';
import { TurnoService } from 'src/service/turno.service';
import { TurnoRepository } from 'src/repository/turno.repository';
import { HorariosRepository } from 'src/repository/horarios.repository';
import { UsuarioRepository } from 'src/repository/usuario.repository';
import { Usuario } from 'src/entity/usuario.entity';
import { Horarios } from 'src/entity/horarios.entity';
import { TipoPagosRepository } from 'src/repository/tipoPagos.repository';
import { TipoPagos } from 'src/entity/tipoPagos.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Turnos, Usuario, Horarios, TipoPagos]),
    HttpModule  
  ],
  providers: [TurnoService, TurnoRepository, UsuarioRepository, HorariosRepository, TipoPagosRepository],
  controllers: [TurnoController],
})
export class TurnoModule {}
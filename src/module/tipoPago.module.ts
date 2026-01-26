import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';

import { TipoPagos } from 'src/entity/tipoPagos.entity';
import { TipoPagosRepository } from 'src/repository/tipoPagos.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([TipoPagos]),
    HttpModule  
  ],
  providers: [TipoPagosRepository],
  controllers: [],
})
export class TipoPagoModule {}
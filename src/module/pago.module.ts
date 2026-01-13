import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { PagoAbstract } from 'src/entity/pago.entity';
import { PagoController } from 'src/controller/pago.controller';
import { PagosService } from 'src/service/pago.service';
import { PagoRepository } from 'src/repository/pago.repository';


@Module({
  imports: [
    TypeOrmModule.forFeature([PagoAbstract]),
    HttpModule,
  ],
  providers: [PagosService, PagoRepository],
  controllers: [PagoController],
})
export class PagoModule {}
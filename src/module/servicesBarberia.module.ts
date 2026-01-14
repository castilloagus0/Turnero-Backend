import { Module, Res } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { SBarberiaController } from 'src/controller/servicesBarberia.controller';
import { SBarberiaService } from 'src/service/servicesBarberia.service';
import { SBarberiaRepository } from 'src/repository/servicesBarberia.repository';
import { AbstractServicioB } from 'src/entity/servicesBarberia.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([AbstractServicioB]),
    HttpModule,
  ],
  providers: [SBarberiaService, SBarberiaRepository],
  controllers: [SBarberiaController],
})
export class SBarberiaModule {}
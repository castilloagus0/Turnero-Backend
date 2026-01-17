import { Module, Res } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { Resenias } from 'src/entity/resenia.entity';
import { ReseniaController } from 'src/controller/resenia.controller';
import { ReseniaService } from 'src/service/resenia.service';
import { ReseniaRepository } from 'src/repository/resenia.repository';
import { UsuarioModule } from './usuario.module';
@Module({
  imports: [
    TypeOrmModule.forFeature([Resenias]),
    HttpModule,
    UsuarioModule
  ],
  providers: [ReseniaService, ReseniaRepository],
  controllers: [ReseniaController],
})
export class ReseniaModule {}
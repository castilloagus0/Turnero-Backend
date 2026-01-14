import { Module, Res } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { Usuario } from 'src/entity/usuario.entity';
import { UsuarioController } from 'src/controller/usuario.controller';
import { UsuarioService } from 'src/service/usuario.service';
import { UsuarioRepository } from 'src/repository/usuario.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario]),
    HttpModule,
  ],
  providers: [UsuarioService, UsuarioRepository],
  controllers: [UsuarioController],
})
export class UsuarioModule {}
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

//Modules
import { GaleryPhotosModule } from './module/galeryPhotos.module';  
import { UsuarioModule } from './module/usuario.module';
import { ReseniaModule } from './module/resenia.module';
import { HorariosModule } from './module/horarios.module';
import { AuthModule } from './module/auth.module';
import { HistorialEstadoModule } from './module/historialEstado.module';
import { PagoModule } from './module/pago.module';
import { SBarberiaModule } from './module/servicesBarberia.module';
import { TurnoModule } from './module/turno.module';

//Entities
import { GaleryPhotos } from './entity/galeryPhotos.entity';
import { Usuario } from './entity/usuario.entity';
import { Resenias } from './entity/resenia.entity';
import { Horarios } from './entity/horarios.entity';
import { HistorialEstado } from './entity/historialEstado.entity';
import { PagoAbstract } from './entity/pago.entity';
import { Turnos } from './entity/turno.entity';
import { AbstractServicioB } from './entity/servicesBarberia.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: (process.env.DB_TYPE || 'mysql') as any,
      host: process.env.MYSQL_HOST || 'localhost',
      port: parseInt(process.env.MYSQL_PORT || '3308', 10),
      username: 'root',
      password: process.env.MYSQL_ROOT_PASS || '',
      database: process.env.MYSQL_DATABASE || 'test',
      entities: [GaleryPhotos, Usuario, Resenias, Horarios, HistorialEstado, PagoAbstract, Turnos, AbstractServicioB],
      autoLoadEntities: true,
      synchronize: true,
      timezone: '+03:00',
    }),      
    GaleryPhotosModule,
    UsuarioModule,
    ReseniaModule,
    HorariosModule,
    AuthModule,
    HistorialEstadoModule,
    PagoModule,
    TurnoModule,
    SBarberiaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

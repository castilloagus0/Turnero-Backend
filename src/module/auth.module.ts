import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { UsuarioModule } from './usuario.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthService} from 'src/service/auth.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthController } from 'src/controller/auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from 'src/strategy/jwt.strategy';


@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    // Configuración asíncrona para leer el .env
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: { 
          expiresIn: configService.get('JWT_EXPIRATION') || '1d' 
        },
      }),
    }),
    UsuarioModule    
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy], 
  exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}

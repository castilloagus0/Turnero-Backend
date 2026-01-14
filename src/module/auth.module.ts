import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { Usuario } from 'src/entity/usuario.entity';
import { JwtModule } from '@nestjs/jwt';
import { AuthService} from 'src/service/auth.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthController } from 'src/controller/auth.controller';


@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario]),
    HttpModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          secret: configService.get("JWT_SECRET"),
          signOptions: { expiresIn: "2h" },
        };
      },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
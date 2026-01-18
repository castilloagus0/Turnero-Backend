import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfigService } from "@nestjs/config";
import { UnauthorizedException } from "@nestjs/common";
import { Usuario } from "src/entity/usuario.entity";
import { JwtPayload } from "src/interface/jwt.interface";

export class JwtStrategy {
  constructor() {}
  
}


//Esto copiar el repo del feli
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfigService } from "@nestjs/config";
import { UnauthorizedException } from "@nestjs/common";
import { Usuario } from "src/entity/usuario.entity";
import { JwtPayload } from "src/interface/jwt.interface";

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(Usuario)
    private readonly userRepository: Repository<Usuario>,
    configService: ConfigService
  ) {
    super({
      secretOrKey: String(process.env.JWT_SECRET), // probamos
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: JwtPayload): Promise<Usuario> {
    const { id } = payload;
    const user = ''
    // const user = await this.userRepository.findOneBy({ id });
    console.log(user);

    if (!user) {
      throw new UnauthorizedException("Token not valid");
    }

    return user;
  }
}
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsuarioRepository } from 'src/repository/usuario.repository';

import { compareText } from 'src/functions/encryp';

@Injectable()
export class AuthService {
    constructor(private readonly usuarioRepository: UsuarioRepository, private jwtService: JwtService){}

    async loginUser(loginDto: any){
        const user = await this.usuarioRepository.findUserByEmail(loginDto.email)

        if(user === null){
            throw new UnauthorizedException('Credenciales inválidas')
        }

        const comparePass = await compareText(loginDto.password, user.password)

        if(!comparePass){
            throw new UnauthorizedException('Contraseña incorrecta')
        }

        const payload = { sub: user.id, email: user.email, rol: user.rol };
    
        return {
        access_token: this.jwtService.sign(payload),
        user: { // Opcional: devolver datos básicos del usuario
            id: user.id,
            nombre: user.nombre,
            rol: user.rol
        }
        };
    }
}
import { Injectable } from '@nestjs/common';

//Respository
import { UsuarioRepository } from 'src/repository/usuario.repository';

@Injectable()
export class UsuarioService {

    constructor(private readonly userRepository: UsuarioRepository) {}

    findUserByEmail(email: string) {
        return this.userRepository.findUserByEmail(email);
    }

    create(createUserDto: any) {

        this.findUserByEmail(createUserDto.email);

        if(!this.findUserByEmail){
            return this.userRepository.create(createUserDto);
        }
    }
}
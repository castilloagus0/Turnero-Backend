import { Injectable } from '@nestjs/common';

//Respository
import { UsuarioRepository } from 'src/repository/usuario.repository';

import { encryptText } from '../functions/encryp' 
import { find } from 'rxjs';

@Injectable()
export class UsuarioService {

    constructor(private readonly userRepository: UsuarioRepository) {}

    async findUserByEmail(email: string) {
        return await this.userRepository.findUserByEmail(email);
    }

    async createUser(createUserDto: any) {

        const findUser = await this.findUserByEmail(createUserDto.email);

        if(findUser === null){
            const hashedPassword = await encryptText(createUserDto.password);

            const userDB = {
                ...createUserDto,
                password: hashedPassword,
                rol: 'user'
            }
            return await this.userRepository.createUser(userDB);
        }
    }
}
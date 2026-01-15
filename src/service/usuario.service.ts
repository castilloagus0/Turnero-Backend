import { Injectable, ConflictException, BadRequestException } from '@nestjs/common';

//Respository
import { UsuarioRepository } from 'src/repository/usuario.repository';

import { encryptText, compareText } from '../functions/encryp' 
import { rememberAcount } from 'src/functions/email';
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
        }else{
            throw new BadRequestException('El usuario ya existe');
        }
    }

    async editUser(editUserDto: any, emailLogueado: string) {
        const findUser = await this.findUserByEmail(emailLogueado);
        console.log(findUser);

        if(findUser !== null){

            const userDB = {
                ...editUserDto,
            }
            return await this.userRepository.editUser(emailLogueado, userDB);
        }else{
            throw new BadRequestException('El usuario no existe');
        }
    }


    async changePassword(changePasswordDto: any, emailLogueado: string) {

        const findUser = await this.findUserByEmail(emailLogueado);

        if(findUser !== null){

            const hashedPassword = await encryptText(changePasswordDto.newPassword);

            const userDB = {
                ...findUser,
                password: hashedPassword
            }
            return await this.userRepository.saveUser(userDB);
        }else{
            throw new BadRequestException('El usuario no existe');
        }
    }

    async comparePassword(changePasswordDto: any, emailLogueado: string){

        const user = await this.findUserByEmail(emailLogueado);

        if(user === null){
            throw new BadRequestException('El usuario no existe');
        }

        const compare = await compareText(changePasswordDto.password, user.password);
        return compare;
    }

    async rememberAcount(emailLogueado: string) {
        const findUser = await this.findUserByEmail(emailLogueado);

        if(findUser !== null){
            await rememberAcount(emailLogueado);
        }
    }

}
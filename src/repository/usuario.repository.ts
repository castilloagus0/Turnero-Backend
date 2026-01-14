import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Usuario } from "src/entity/usuario.entity";
import { Repository } from "typeorm";


@Injectable()
export class UsuarioRepository {

    constructor(
        @InjectRepository(Usuario)
        private readonly usuarioRepository: Repository<Usuario>,
    ) {}    

    async findUserByEmail(email: string) {
        return this.usuarioRepository.findOne({ where:{ email } })
    }


    //En este caso divido por responsabilidad. Primero creo en un metodo y luego guardo en otro.
    async createUser(createUserDto: any){
        const create = this.usuarioRepository.create(createUserDto);
        return this.usuarioRepository.save(create);
    }

    async saveUser(user: Usuario) {
        const save = await this.usuarioRepository.save(user);
        return save;
    }

}
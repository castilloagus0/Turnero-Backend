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


    create(createUserDto: any) {}

    findUserByEmail(email: string) {}

}
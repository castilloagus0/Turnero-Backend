import { Injectable } from "@nestjs/common";
import { Resenias } from "src/entity/resenia.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { UsuarioRepository } from "./usuario.repository";
import { get } from "axios";

@Injectable()
export class ReseniaRepository {
    constructor(
        @InjectRepository(Resenias)
        private readonly reseniasRepository: Repository<Resenias>,
        private readonly usuarioRepository: UsuarioRepository,
    ) {}  

    async getReview(): Promise<Resenias[] | null>{
        const resenias = await this.reseniasRepository.find();
        
        // Ajustar fechas restando 3 horas
        if (resenias) {
            resenias.forEach(resenia => {
                if (resenia.fechaRegistro) {
                    const fecha = new Date(resenia.fechaRegistro);
                    fecha.setHours(fecha.getHours() - 3);
                    resenia.fechaRegistro = fecha;
                }
            });
        }
        
        return resenias;
    }

    async createReview(review: any, emailLogueado: string){
        const getID = await this.usuarioRepository.findUserByEmail(emailLogueado)

        if(getID){
            
            const createReview = {
                ...review,
                usuarioId: getID.id
            }

            const create = await this.reseniasRepository.create(createReview);
            return await this.reseniasRepository.save(create);
        }
    }

    async saveReview(review: Resenias){
        return await this.reseniasRepository.save(review);
    }
}
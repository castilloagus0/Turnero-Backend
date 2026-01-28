import { Injectable } from "@nestjs/common";
import { Horarios } from "src/entity/horarios.entity";
import { InjectRepository,  } from "@nestjs/typeorm";
import { Repository } from "typeorm";


@Injectable()
export class HorariosRepository {
    constructor(
        @InjectRepository(Horarios)
        private readonly horariosRepository: Repository<Horarios>,
    ){}


    async getHorarios(): Promise<Horarios[] | null> {
        return await this.horariosRepository.find();
    }

    async getHorario(id: number): Promise<Horarios | null> {
        return await this.horariosRepository.findOne({where: { id }});
    }

    async getHorarioXHora(horaInicio: string): Promise<Horarios | null> {
        return await this.horariosRepository.findOne({where : { horaInicio }})
    }

    async createHorarios(createHorario: any){
        const create = await this.horariosRepository.create(createHorario);
        return await this.horariosRepository.save(create);
    }

    async saveHorario(param: any){
        return await this.horariosRepository.save(param);
    }

    async deleteHorarios(horarioInicio){
        return await this.horariosRepository.delete({horaInicio: horarioInicio});
    }

}
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Turnos } from "src/entity/turno.entity";


@Injectable()
export class TurnoRepository {
    constructor(
        @InjectRepository(Turnos)
        private readonly turnosRepository: Repository<Turnos>
    ) {}    

    async getTurnos(): Promise<Turnos[] | null>{
        return await this.turnosRepository.find();
    }

    async getTurno(id: number): Promise<Turnos | null> {
        return await this.turnosRepository.findOne({where: { id }});
    }

    async getTurnoExiste(horarioId: string, estado: string): Promise<Turnos[] | null>{
        return await this.turnosRepository.createQueryBuilder('turnos')
        .where('turnos.horario_id = :horarioId', { horarioId: horarioId })
        .andWhere('turnos.estado = :estado', { estado: estado }) 
        .getMany();    
    }

    async createTurno(createTurnoDto: any){
    
        const create = this.turnosRepository.create(createTurnoDto);
        return this.turnosRepository.save(create);
    }

    async saveTurno(turno: Turnos) {
        return await this.turnosRepository.save(turno);
    }

    async editTurno(id: number, editTurnoDto: any){
        return await this.turnosRepository.update({ id }, editTurnoDto);
    }
}
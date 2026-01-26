import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Turnos } from "src/entity/turno.entity";

import { UsuarioRepository } from "./usuario.repository";
import { HorariosRepository } from "./horarios.repository";
import { TipoPagosRepository } from "./tipoPagos.repository";


@Injectable()
export class TurnoRepository {
    constructor(
            @InjectRepository(Turnos)
            private readonly turnosRepository: Repository<Turnos>,
            private readonly usuarioRepository: UsuarioRepository,
            private readonly horariosRepository: HorariosRepository,
            private readonly tipoPagosRepository: TipoPagosRepository,
    ) {}    

    async getTurnos(): Promise<Turnos[] | null>{
        return await this.turnosRepository.find();
    }

    async getTurno(id: number): Promise<Turnos | null> {
        return await this.turnosRepository.findOne({where: { id }});
    }

    async createTurno(createTurnoDto: any){
        const existeTurno = await this.turnosRepository.findOne({where: { horario: createTurnoDto.horario }});
        
        if(existeTurno){
            throw new Error('Ya existe un turno para el horario seleccionado');
        }

        const existeUsuario = await this.usuarioRepository.getUsuario(createTurnoDto.usuarioId);
        
        if(!existeUsuario){
            throw new Error('El usuario no existe');
        }

        const existeHorario = await this.horariosRepository.getHorario(createTurnoDto.horarioId);
        
        if(!existeHorario){
            throw new Error('El horario no existe');
        }

        const existePago = await this.tipoPagosRepository.getTipoPagoById(createTurnoDto.tipoPagoId);
        if(!existePago){
            throw new Error('El tipo de pago no existe');
        }

        const create = this.turnosRepository.create(createTurnoDto);
        return this.turnosRepository.save(create);
    }

    async saveTurno(turno: Turnos) {
        const save = await this.turnosRepository.save(turno);
        return save;
    }

    async editTurno(id: number, editTurnoDto: any){
        return await this.turnosRepository.update({ id }, editTurnoDto);
    }


}
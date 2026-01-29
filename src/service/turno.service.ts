import { Injectable } from '@nestjs/common';
import { TurnoRepository } from 'src/repository/turno.repository';

import { CreateTurnoDto } from 'src/dto/create-turno.dto';
import { HorariosRepository } from 'src/repository/horarios.repository';
import { UsuarioRepository } from 'src/repository/usuario.repository';
import { TipoPagosRepository } from 'src/repository/tipoPagos.repository';

@Injectable()
export class TurnoService {
    constructor(
        private readonly turnoRepository: TurnoRepository, 
        private readonly usuarioRepository: UsuarioRepository, 
        private readonly horariosRepository: HorariosRepository,
        private readonly tipoPagosRepository: TipoPagosRepository,
    ) {}

    async getTurnos() {
        return await this.turnoRepository.getTurnos();
    }

    async getTurnoById(id: number) {
        return await this.turnoRepository.getTurno(id);
    }

    async getTurnoExistente(horarioId: string, estado: string){
        return await this.turnoRepository.getTurnoExiste(horarioId, estado)
    }

    async createTurno(turno: CreateTurnoDto) {
        const validate = await this.validationsCreateTurno(turno);
        
        if(validate){
            return await this.turnoRepository.createTurno(turno);
        }
    }

    async updateTurno(id: number, turno) {
        return await this.turnoRepository.editTurno(id, turno);
    }

    async validationsCreateTurno(createTurnoDto: CreateTurnoDto): Promise <boolean>{

        const horarioId = await this.horariosRepository.getHorarioXHora(createTurnoDto.horaInicio)

        if(!horarioId){
            throw new Error('No existe ese horario')           
        }

        const existeTurno = await this.turnoRepository.getTurnoExiste(horarioId.toString(), 'PENDIENTE')
                    
        if(existeTurno?.length!==0){
            throw new Error('Ya existe un turno para el horario seleccionado');
        }

        const existeUsuario = await this.usuarioRepository.getUsuario(createTurnoDto.usuarioId);
                    
        if(!existeUsuario){
            throw new Error('El usuario no existe');
        }

        const existePago = await this.tipoPagosRepository.getTipoPagoById(createTurnoDto.tipoPagoId);
        if(!existePago){
            throw new Error('El tipo de pago no existe');
        }
            
        return true
    }    

}

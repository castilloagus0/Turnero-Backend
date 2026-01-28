import { Injectable } from '@nestjs/common';
import { TurnoRepository } from 'src/repository/turno.repository';

@Injectable()
export class TurnoService {
    constructor(private readonly turnoRepository: TurnoRepository) {}

    async getTurnos() {
        return await this.turnoRepository.getTurnos();
    }

    async getTurnoById(id: number) {
        return await this.turnoRepository.getTurno(id);
    }

    async getTurnoExistente(horarioId: string, estado: string){
        return await this.turnoRepository.getTurnoExiste(horarioId, estado)
    }

    async createTurno(turno) {
        return await this.turnoRepository.createTurno(turno);
    }

    async updateTurno(id: number, turno) {
        return await this.turnoRepository.editTurno(id, turno);
    }
    

}

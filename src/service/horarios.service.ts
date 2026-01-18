import { Injectable } from '@nestjs/common';
import { HorariosRepository } from 'src/repository/horarios.repository';

@Injectable()
export class HorariosService {

    constructor(private readonly horariosRepository: HorariosRepository){}

    async getHorarios(){
        return await this.horariosRepository.getHorarios();
    }

    async createHorarios(createHorario: any){
        return await this.horariosRepository.createHorarios(createHorario);
    }

    async deleteHorarios(horarioInicio: string){
        return await this.horariosRepository.deleteHorarios(horarioInicio);
    }

}
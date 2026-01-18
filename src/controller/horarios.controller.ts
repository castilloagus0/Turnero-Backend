import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

import { HorariosService } from 'src/service/horarios.service';

import { CreateHorariosDto } from 'src/dto/create-horarios.dto';


@Controller('horarios')
export class HorariosController {

    constructor(private horariosSerivice: HorariosService){}

    @Get('')
    async getHorarios(){
        return await this.horariosSerivice.getHorarios();
    }

    @Post('createHorarios')
    async createHorarios(@Body() createHorarioDto: CreateHorariosDto){
        return await this.horariosSerivice.createHorarios(createHorarioDto);
    }

    @Delete('deleteHorarios/:horaInicio')
    async deleteHorarios(@Param('horaInicio') horaInicio: string){
        return await this.horariosSerivice.deleteHorarios(horaInicio);
    }

}
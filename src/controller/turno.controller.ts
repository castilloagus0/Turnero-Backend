import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { TurnoService } from 'src/service/turno.service';
import { CreateTurnoDto } from 'src/dto/create-turno.dto';

@Controller('turno')
export class TurnoController {

    constructor(private readonly turnoService: TurnoService){}

    @Get('')
    async getTurnos() {
        return this.turnoService.getTurnos();
    }

    @Get(':id')
    async getTurnoById(@Param('id') id: number) {
        return this.turnoService.getTurnoById(id);
    }

    @Get(':horarioInicio/:estado')
    async getTurnoExiste(@Param('horarioInicio') horarioInicio: string, @Param('estado') estado: string) {
        return this.turnoService.getTurnoExistente(horarioInicio, estado);
    }

    @Post('create')
    async createTurno(@Body() createTurnoDto: CreateTurnoDto) {
        return this.turnoService.createTurno(createTurnoDto);
    }

    @Put(':id')
    async updateTurno(@Param('id') id: number, @Body() createTurnoDto: CreateTurnoDto) {
        return this.turnoService.updateTurno(id, createTurnoDto);
    }

}
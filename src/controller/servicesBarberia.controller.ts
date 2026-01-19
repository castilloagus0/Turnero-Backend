import { Controller, Get, Param } from '@nestjs/common';
import { SBarberiaService } from 'src/service/servicesBarberia.service';

@Controller('sbarber')
export class SBarberiaController {
    constructor(private readonly sBarberiaService: SBarberiaService) {}

    @Get('strategy/:nombreServicio')
    getServicioStrategy(@Param('nombreServicio') nombreServicio: string) {
        const strategy = this.sBarberiaService.getStrategy(nombreServicio);
        return {
            nombre: strategy.getNombre(),
            precio: strategy.getPrecio(),
            duracion: strategy.getDuracionAproximada()
        };
    }

}
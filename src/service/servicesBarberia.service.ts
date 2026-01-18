import { Injectable } from '@nestjs/common';
import { ServicioStrategy } from 'src/interface/servicioB.interface';
import { CorteCejasStrategy } from 'src/strategy/corteYCejasStrategy.strategy';
import { CorteBarbaStrategy } from 'src/strategy/corteYBarbaStrategy.strategy';
import { CorteTradicional } from 'src/strategy/CorteTradicionalStrategy.strategy';
import { CorteCompleto } from 'src/strategy/CompletoStrategy.strategy';

@Injectable()
export class SBarberiaService {
    private strategies: Map<string, ServicioStrategy> = new Map();

    constructor(
        private readonly CorteYCejas: CorteCejasStrategy,
        private readonly CorteYBarba: CorteBarbaStrategy,
        private readonly CorteTradicional: CorteTradicional,
        private readonly CorteCompleto: CorteCompleto
    ){}

}
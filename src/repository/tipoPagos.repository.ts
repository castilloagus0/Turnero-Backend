import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { get } from "axios";

import { TipoPagos } from "src/entity/tipoPagos.entity";

@Injectable()
export class TipoPagosRepository {
    constructor(
        @InjectRepository(TipoPagos)
        private readonly tipoPagosRepository: Repository<TipoPagos>,
    ) {}  

    async getTipoPagos(): Promise<TipoPagos[] | null>{
        return await this.tipoPagosRepository.find();
    }

    async getTipoPagoById(id: number): Promise<TipoPagos | null>{
        return await this.tipoPagosRepository.findOne({where: { id }});
    }

}
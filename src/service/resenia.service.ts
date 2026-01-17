import { Injectable } from '@nestjs/common';
import { ReseniaRepository } from 'src/repository/resenia.repository';

@Injectable()
export class ReseniaService {
    constructor(private readonly reseniaRepository: ReseniaRepository){}

    async getReview(){
        return await this.reseniaRepository.getReview();
    }


    async createReview(review: any, emailLogueado){
        return await this.reseniaRepository.createReview(review, emailLogueado);
    }
}
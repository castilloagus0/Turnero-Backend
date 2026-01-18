import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { ReseniaService } from 'src/service/resenia.service';

import { ReviewDto } from 'src/dto/create-review.dto';

@Controller('review')
export class ReseniaController {
    constructor(private reseniaService: ReseniaService){}

    @Get('')
    async getReview(){
        return this.reseniaService.getReview();
    }

    @Post('createReview/:email')
    async createReview(@Body() review: ReviewDto, @Param('emailLog') emailLogueado: string){
        return this.reseniaService.createReview(review, emailLogueado)
    }
}
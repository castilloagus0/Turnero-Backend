import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';

import { GaleryPhotosService } from 'src/service/galeryPhotos.service';

import { CreatePhotoDto } from 'src/dto/create-photos.dto';

@Controller('galery-photos')
export class GaleryPhotosController {
    constructor(private readonly galeryService: GaleryPhotosService){}

    @Get('')
    async getAllPhotos(){
        return await this.galeryService.getGalery();
    }

    @Get(':id')
    async getPhotoById(@Param('id') id: number){
        return await this.galeryService.getPhotoById(id);
    }

    @Post('createPhoto')
    async createPhoto(@Body() createPhotoDto: CreatePhotoDto){
        return await this.galeryService.createPhoto(createPhotoDto);
    }

    @Delete('deletePhoto/:id')
    async deletePhoto(@Param('id') id: number){
        return await this.galeryService.deletePhoto(id);
    }
}
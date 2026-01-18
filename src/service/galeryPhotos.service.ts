import { Injectable } from '@nestjs/common';
import { GaleryPhotosRepository } from 'src/repository/galeryPhotos.repository';

@Injectable()
export class GaleryPhotosService {
    constructor(private readonly galeryRepository: GaleryPhotosRepository){}

    async getGalery(){
        return await this.galeryRepository.getGalery();
    }

    async getPhotoById(id: number){
        return await this.galeryRepository.getPhotoById(id);
    }

    async createPhoto(photo: any){
        const photoExists = await this.galeryRepository.findPhotoByUrl(photo.url);
        
        if(photoExists){
            return new Error("Foto existente");
        }

        return await this.galeryRepository.createPhoto(photo);
    }

    async deletePhoto(id: number){
        return await this.galeryRepository.deletePhoto(id);
    }
}
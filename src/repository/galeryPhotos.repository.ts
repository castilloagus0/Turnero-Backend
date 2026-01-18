import { Injectable } from "@nestjs/common";
import { GaleryPhotos } from "src/entity/galeryPhotos.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class GaleryPhotosRepository {
    constructor(
        @InjectRepository(GaleryPhotos)
        private readonly galeryPhotosRepository: Repository<GaleryPhotos>
    ){}

    async getGalery(): Promise<GaleryPhotos[] | null>{
        return await this.galeryPhotosRepository.find();
    }

    async getPhotoById(id: number): Promise<GaleryPhotos | null>{
        return await this.galeryPhotosRepository.findOne({where: {id}});
    }

    async createPhoto(createPhoto: any){
        const create = await this.galeryPhotosRepository.create(createPhoto);
        return await this.savePhoto(create);
    }

    async savePhoto(param: any){
        return await this.galeryPhotosRepository.save(param);
    }

    async deletePhoto(id: number){
        return await this.galeryPhotosRepository.delete({id});
    }

    async findPhotoByUrl(url: string){
        return await this.galeryPhotosRepository.findOne({where: {url}});
    }
}
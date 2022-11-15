import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Laboratory } from '../entity/Laboratory';
import { LaboratoryCreateDto, LaboratoryEditDto } from './dtoforlab';

@Injectable()
export class LaboratoryService {
    constructor (@InjectRepository(Laboratory)private laboratoryRepository:Repository<Laboratory>){}

    async Createnew(createdto:LaboratoryCreateDto){
        return await this.laboratoryRepository.save(createdto)
    }

    async Getall():Promise<Laboratory[]>{
        return await this.laboratoryRepository.find()
    }

    async GetOne(id:number){
        const user = await this.laboratoryRepository.findOneBy({id})
        if (!user){
            throw new HttpException(`the laboratory with id ${id}is not found`, HttpStatus.NOT_FOUND)
        }
        return user
    }

    async Update(id:number, editdto:LaboratoryEditDto){
        const user = await this.laboratoryRepository.update(id, editdto)
        const updatedLaboratory= await this.laboratoryRepository.findOneBy({id})

        if (!updatedLaboratory){
            throw new HttpException(`the Laboratory with id ${id} does nt exist`, HttpStatus.NOT_FOUND)

        }
        return updatedLaboratory

    }

    async Delete(id:number){
        const user=await this.laboratoryRepository.delete(id)
        if (!user.affected){
            throw  new HttpException(`the user with the id ${id} is not found`, HttpStatus.NOT_FOUND)

        }
        return HttpStatus.OK
    }
}

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pharmarcy } from '../entity/Pharmacy';
import { PharmacyCreateDto, PharmacyEditDto } from './dto';

@Injectable()
export class PharmacyService {
    constructor (@InjectRepository(Pharmarcy)private pharmacyRepository:Repository<Pharmarcy>){}    
    
    async Createnew(createdto:PharmacyCreateDto){
        return await this.pharmacyRepository.save(createdto)
    }

    async Getall():Promise<Pharmarcy[]>{
        return await this.pharmacyRepository.find()
    }

    async GetOne(id:number){
        const user = await this.pharmacyRepository.findOneBy({id})
        if (!user){
            throw new HttpException(`the user with id ${id}is not found`, HttpStatus.NOT_FOUND)
        }
        return user
    }

    async Update(id:number, editdto:PharmacyEditDto){
        const user = await this.pharmacyRepository.update(id, editdto)
        const updatedPhamarcy= await this.pharmacyRepository.findOneBy({id})

        if (!updatedPhamarcy){
            throw new HttpException(`the pharmacy with id ${id} does nt exist`, HttpStatus.NOT_FOUND)

        }
        return updatedPhamarcy 

    }

    async Delete(id:number){
        const user=await this.pharmacyRepository.delete(id)
        if (!user.affected){
            throw  new HttpException(`the user with the id ${id} is not found`, HttpStatus.NOT_FOUND)

        }
        return HttpStatus.OK
    }
}
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hospitals } from '../entity/Hospital';
import { HospitalCreateDto, HospitalEditDto } from './dtoforhospital';

@Injectable()
export class HospitalService {
    constructor(@InjectRepository(Hospitals)private hospitalRepository:Repository<Hospitals>){}

    async CreateNewHospital(createHopitalDto:HospitalCreateDto){
        return await this.hospitalRepository.save(createHopitalDto)
    }

    async GetAll():Promise<Hospitals[]>{
        return await this.hospitalRepository.find()
    }

    async GetOne(id:number){
        const user= await this.hospitalRepository.findOneBy({id})
        if(!user){
            throw new HttpException(`hospital with id ${id} does not exist `,HttpStatus.NOT_FOUND)
        }
        return user
    }

    async UpdateHospital(id:number, editHospitalDto:HospitalEditDto){
        const hospital = await this.hospitalRepository.update(id,editHospitalDto)
        const edittedhospital= await this.hospitalRepository.findOneBy({id})
        if (!edittedhospital){
            throw new HttpException(`the hospital with id ${id} is not found`, HttpStatus.NOT_FOUND)

        }
        return edittedhospital
    }

    async DeleteHospital(id:number){
        const hospital=await this.hospitalRepository.delete(id)
        
        if (!hospital.affected){
            throw new HttpException(`the hopital with the id ${id}is not found`,HttpStatus.NOT_FOUND )
        }
        return HttpStatus.OK
    }

}

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Patient } from '../entity/Patients';
import { PatientCreateDto, PatientEditDto } from './dtoforpatients';
import * as argon from 'argon2'


@Injectable()
export class PatientsService {
    constructor(@InjectRepository(Patient)private patientRepository: Repository<Patient>){}

    async createPatient(patientDto:PatientCreateDto){
        const hash = await argon.hash(patientDto.password)
        
        
        
        return await this.patientRepository.save(patientDto) //the save should be to the patientdatabase
    }

    async GetAll():Promise<Patient[]>{
        return await this.patientRepository.find();

    }

    async GetOnebyName(id:number){
        const User = 
         await this.patientRepository.findOne({
          where:{id}   
            })

            if (!User){
                throw new HttpException(`user with id ${id} is not found`, HttpStatus.NOT_FOUND)
            }

        return User
    }

    async update(id:number,updateDto:PatientEditDto){
        const user = await this.patientRepository.update(id, updateDto)
        const updatedUser= await this.patientRepository.findOneBy({id})
        if (!updatedUser){
            throw new HttpException(`record with ${id} not found`, HttpStatus.NOT_FOUND)
        }
        return updatedUser        
    }

    async Delete(id:number){
        const user = await this.patientRepository.delete(id)
        if (!user.affected){
            throw new HttpException(`the patient with id ${id} is not found `, HttpStatus.BAD_REQUEST)
        }
        return HttpStatus.OK
    }
    
}

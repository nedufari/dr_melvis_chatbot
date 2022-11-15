import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { PatientCreateDto, PatientEditDto } from './dtoforpatients';
import { PatientsService } from './patients.service';

@Controller('patients')
export class PatientsController {
    constructor(private patientservice:PatientsService){}

    //all my cruds 

    @Post('/new')
   async createNewPatient(@Body()patientDto:PatientCreateDto){
    console.log(patientDto)
        return await this.patientservice.createPatient(patientDto)
    }

    @Get('/all')
    async GetAll(){
        return await this.patientservice.GetAll()
    }

    @Get("/one/:id")
    async GetoneById(@Param("id",ParseIntPipe)id:number){
        return await this.patientservice.GetOnebyName(id)
    }

    @Put("/one/:id")
    async update(@Body()updateDto:PatientEditDto, @Param("id",ParseIntPipe)id:number){
        return await this.patientservice.update(id,updateDto)
    }

    @Delete('/one/:id')
    async Delete(@Param("id",ParseIntPipe)id:number){
        return this.patientservice.Delete(id)
    }
}

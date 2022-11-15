import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { HospitalCreateDto, HospitalEditDto } from './dtoforhospital';
import { HospitalService } from './hospital.service';

@Controller('hospital')
export class HospitalController {
    constructor(private hospitalservice:HospitalService){}

    @Post('new')
    async createNewHospital(@Body()dto:HospitalCreateDto){
        return await this.hospitalservice.CreateNewHospital(dto)
    }

    @Get('all')
    async GetAll(){
        return await this.hospitalservice.GetAll()
    }

    @Get('one/:id')
    async GetOne(@Param('id',ParseIntPipe)id:number){
        return await this.hospitalservice.GetOne(id)
    }

    @Put('update/:id')
    async UpdateHospital(@Body()dto:HospitalEditDto, @Param('id',ParseIntPipe)id:number){
        return await this.hospitalservice.UpdateHospital(id,dto)
    }

    @Delete('delete/:id')
    async Delete(@Param('id',ParseIntPipe)id:number){
        return await this.hospitalservice.DeleteHospital(id)
    }
}

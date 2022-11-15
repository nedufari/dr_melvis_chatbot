import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { Roles } from '../auth/decorators';
import { RolesGuard } from '../auth/guards';
import Role from '../enum.roles';
import { PatientCreateDto, PatientEditDto } from '../patients/dtoforpatients';
import { PharmacyCreateDto, PharmacyEditDto } from './dto';
import { PharmacyService } from './pharmacy.service';

@Controller('pharmacy')
export class PharmacyController {
    constructor(private pharmacyservice :PharmacyService){}


    
    @Roles(Role.Pharmacy)
    @Post('new') 
    async Createnew(@Body()createdDto:PharmacyCreateDto){
        return await this.pharmacyservice.Createnew(createdDto)
    }

    @Get('all')
    async Getall(){
        return await this.pharmacyservice.Getall()
    }

    @Get('one/:id')
    async GetOne(@Param('id',ParseIntPipe)id:number){
        return await this.pharmacyservice.GetOne(id)
    }

    @Put('update/:id')
    async Update(@Body()editDto:PharmacyEditDto, @Param('id',ParseIntPipe) id:number){
        return await this.pharmacyservice.Update(id,editDto)
    }

    @Delete("delete/:id")
    async Delete(@Param('id',ParseIntPipe)id:number){
        return await this.pharmacyservice.Delete(id)
    }
}

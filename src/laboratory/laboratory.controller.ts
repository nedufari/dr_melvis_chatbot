import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { LaboratoryCreateDto, LaboratoryEditDto } from './dtoforlab';
import { LaboratoryService } from './laboratory.service';

@Controller('laboratory')
export class LaboratoryController {
    constructor(private laboratoryservice :LaboratoryService){}

    @Post('new')
    async Createnew(@Body()createdDto:LaboratoryCreateDto){
        return await this.laboratoryservice.Createnew(createdDto)
    }

    @Get('all')
    async Getall(){
        return await this.laboratoryservice.Getall()
    }

    @Get('one/:id')
    async GetOne(@Param('id',ParseIntPipe)id:number){
        return await this.laboratoryservice.GetOne(id)
    }

    @Put('update/:id')
    async Update(@Body()editDto:LaboratoryEditDto, @Param('id',ParseIntPipe) id:number){
        return await this.laboratoryservice.Update(id,editDto)
    }

    @Delete("delete/:id")
    async Delete(@Param('id',ParseIntPipe)id:number){
        return await this.laboratoryservice.Delete(id)
    }
}

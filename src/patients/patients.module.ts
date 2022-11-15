import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patient } from '../entity/Patients';
import { PatientsController } from './patients.controller';
import { PatientsService } from './patients.service';

@Module({
    controllers:[PatientsController],
    providers:[PatientsService],
    imports:[TypeOrmModule.forFeature([Patient])]
    
})
export class PatientsModule {}

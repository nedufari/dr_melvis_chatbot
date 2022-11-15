import { Module } from '@nestjs/common';
import { HospitalService } from './hospital.service';
import { HospitalController } from './hospital.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hospitals } from '../entity/Hospital';

@Module({
  providers: [HospitalService],
  controllers: [HospitalController],
  imports:[TypeOrmModule.forFeature([Hospitals])]
})
export class HospitalModule {}

import { Module } from '@nestjs/common';
import { LaboratoryService } from './laboratory.service';
import { LaboratoryController } from './laboratory.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Laboratory } from '../entity/Laboratory';

@Module({
  providers: [LaboratoryService],
  controllers: [LaboratoryController],
  imports:[TypeOrmModule.forFeature([Laboratory])]
})
export class LaboratoryModule {}

import { Module } from '@nestjs/common';
import { PharmacyService } from './pharmacy.service';
import { PharmacyController } from './pharmacy.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pharmarcy } from '../entity/Pharmacy';

@Module({
  providers: [PharmacyService],
  controllers: [PharmacyController],
  imports:[TypeOrmModule.forFeature([Pharmarcy])]
})
export class PharmacyModule {}

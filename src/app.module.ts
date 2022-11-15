import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { AppDataSource } from './data-source';
import { PatientsController } from './patients/patients.controller';
import { PatientsService } from './patients/patients.service';
import { PatientsModule } from './patients/patients.module';
import { PharmacyModule } from './pharmacy/pharmacy.module';
import { HospitalModule } from './hospital/hospital.module';
import { LaboratoryModule } from './laboratory/laboratory.module';
import {ConfigModule} from '@nestjs/config'
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModules } from './type-orm/type-orm.module';
import { TypeOrmService } from './type-orm/type-orm.service';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth/guards';







@Module({
    imports:[
        TypeOrmModule.forRootAsync({useClass:TypeOrmService}),
        PatientsModule,
        PharmacyModule,
        HospitalModule,
        LaboratoryModule,   
        ConfigModule.forRoot({isGlobal:true}), AuthModule, TypeOrmModules,
    
    ],
    controllers: [AuthController],
    providers:[{provide:APP_GUARD,useClass:RolesGuard}]
    
  
  
})
export class AppModule {}

import { Injectable } from '@nestjs/common';
import {ConfigService} from '@nestjs/config'
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Hospitals } from '../entity/Hospital';
import { Laboratory } from '../entity/Laboratory';
import { Patient } from '../entity/Patients';
import { Pharmarcy } from '../entity/Pharmacy';


@Injectable()
export class TypeOrmService implements TypeOrmOptionsFactory{
    constructor(private configservice:ConfigService){
        
    }
    createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
        return {
            type: "postgres",
            host: "localhost",
            port: this.configservice.get('DATABASE_PORT'),
            username: this.configservice.get('DATABASE_USERNAME'),
            password: this.configservice.get('DATABASE_PASSWORD'),
            database: this.configservice.get('DATABASE_NAME'),
            synchronize: true,
            logging: false,
            entities: [Patient,Hospitals,Pharmarcy,Laboratory],
            
            migrations: [],
            subscribers: [],
        }
    }

}

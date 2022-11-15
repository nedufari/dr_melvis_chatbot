import { Injectable } from "@nestjs/common";
import {PassportStrategy} from '@nestjs/passport'
import {Strategy,ExtractJwt} from 'passport-jwt'
import {ConfigService} from '@nestjs/config'
import { TypeOrmService } from "../../type-orm/type-orm.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(configservice:ConfigService, private typeorm:TypeOrmService){
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey:configservice.get("JWT_SECRET_KEY")
        })
    }

    async validate(payload:{
        sub:number;
        email:string;
    }){
        const user =await this.typeorm
        //the game 
    }


    

}
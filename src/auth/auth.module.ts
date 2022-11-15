import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './Strategy';
import {JwtModule} from '@nestjs/jwt'
import { TypeOrmService } from '../type-orm/type-orm.service';

@Module({
  providers: [AuthService,],
  controllers:[AuthController],
  imports:[JwtModule.register({})],
  
})
export class AuthModule {}

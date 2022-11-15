import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmService } from './type-orm.service';

@Global()
@Module({
  providers: [TypeOrmService],
  exports:[TypeOrmService]

})
export class TypeOrmModules {}

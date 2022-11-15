import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(new ValidationPipe({whitelist:true}))
  app.enableCors({
    
    methods:["*"],
    origin:['http://localhost:3000','http://localhost:8080', 'http://localhost:4200']
  }) //the ports are for react, vuejs and for angular
  await app.listen(5000);
}
bootstrap();

import { IsEmail, IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class PatientCreateDto{

    @IsString()
    @IsNotEmpty()
    firstName:string

    @IsString()
    @IsNotEmpty()
    middleName:string

    @IsString()
    @IsNotEmpty()
    lastName:string

    @IsString()
    @IsNotEmpty()
    location:string


    @IsString()
    @IsNotEmpty()
    country:string

   

    @IsEmail()
    @IsNotEmpty()
    email:string

    @IsString()
    @IsNotEmpty()
    gender:string

    @IsString()
    @IsNotEmpty()
    state:string

   

    @IsString()
    @IsNotEmpty()
    password:string

  

    @IsString()
    @IsNotEmpty()
    phone:string



    @IsString()
    medical_history?:string


    
    

}
import { IsEmail, IsInt, IsNotEmpty, IsString } from "class-validator"

export class LaboratoryEditDto{

    @IsString()
    @IsNotEmpty()
    laboratory_name:string

   
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
    website:string

    @IsString()
    @IsNotEmpty()
    state:string


    @IsString()
    @IsNotEmpty()
    password:string


    @IsInt()
    @IsNotEmpty()
    phone1:string

    @IsInt()
    @IsNotEmpty()
    phone2:string


    @IsString()
    @IsNotEmpty()
    RC_number:string    




    
    

}
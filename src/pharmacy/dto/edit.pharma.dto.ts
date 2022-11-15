import { IsEmail, IsInt, IsNotEmpty, IsString } from "class-validator"

export class PharmacyEditDto{

    @IsString()
    @IsNotEmpty()
    hospital_name:string

    @IsString()
    @IsNotEmpty()
    location:string


    @IsString()
    @IsNotEmpty()
    country:string

    @IsString()
    @IsNotEmpty()
    website:string

    @IsEmail()
    @IsNotEmpty()
    email:string

    @IsString()
    @IsNotEmpty()
    RC_number:string


   

    @IsInt()
    @IsNotEmpty()
    phone1:string

    @IsInt()
    phone2:string

    @IsString()
    @IsNotEmpty()
    bio:string

    @IsString()
    breakthrough:string

    @IsString()
    @IsNotEmpty()
    testimonies:string

    
    

}
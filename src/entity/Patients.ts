import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"
import Role from "../enum.roles";

@Entity()
export class Patient extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({type:'timestamp',default:()=>"CURRENT_TIMESTAMP",nullable:false})
    created_at:string;


    @Column()
    firstName: string

    @Column()
    middleName: string

    @Column()
    lastName: string

    @Column()
    location:string

    @Column()
    country:string

    @Column({type:"text",unique:true})
    email:string 

    @Column()
    gender:string

    @Column()
    state:string

    @Column()
    password:string

    @Column()
    phone:string

    @Column()
    medical_history:string

    @Column({type:'enum',
    enum:Role,
    default:Role.Patient})
    role:Role
}



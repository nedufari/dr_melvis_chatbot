import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import Role from "../enum.roles";


@Entity()
export class Laboratory extends BaseEntity{

    @PrimaryGeneratedColumn()
    id:number

    @Column({type:"timestamp", default:()=>"CURRENT_TIMESTAMP"})
    created_at:string

    @Column({type:'text', unique:true, nullable:false})
    laboratory_name:string

    @Column()
    location:string

    @Column()
    country:string

    @Column()
    state:string

    @Column()
    website:string

    @Column()
    password:string

    @Column({type:"varchar", unique:true,nullable:false})
    email:string

    @Column({type:"varchar",unique:true, nullable:false})
    RC_number:string

    @Column()
    phone1:string

    @Column()
    phone2:string

    @Column({length:150})
    bio:string

    @Column({type:'enum',
    enum:Role,
    default:Role.Laboratory})
    role:Role

   

  

}
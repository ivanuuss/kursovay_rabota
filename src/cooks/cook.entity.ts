import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {Workshops} from "../workshops/workshops.entity";
import {IsString} from "class-validator";

@Entity('cooks')
export class Cooks
{
    @PrimaryGeneratedColumn()
    id: number;

    @IsString()
    @Column()
    fullname: string;

    @IsString()
    @Column()
    position: string;

    @IsString()
    @Column()
    workexperience: string;
    @ManyToMany((type)=> Workshops, (workshops => workshops.dishes))
    @JoinTable({name: 'workshop_cooks',
        joinColumn: {name: 'cooks_id'},
        inverseJoinColumn: {name: 'workshop_id'},})
    workshops: Cooks[];
}
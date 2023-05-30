import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {Workshops} from "../workshops/workshops.entity";
import {Cooks} from "../cooks/cook.entity";
import {IsString} from "class-validator";

@Entity('dishes')//указывает, что класс является сущностью базы данных
export class Dishes
{
    @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
    id: number;

    @IsString()
    @Column({}) //колонка таблицы, сюда можно добавить тип, уникальность, триггер и т.д.
    nameofthedish: string;

    @IsString()
    @Column()
    workshoplocation: string;

    @IsString()
    @Column()
    ingredients: string;

    @ManyToMany(() => Workshops, (workshops) => workshops.dishes)
    @JoinTable({
        name: 'dishes_workshops',
        joinColumn: {name: 'dishes_id'},
        inverseJoinColumn: {name: 'workshop_id'},
    })
    workshops: Workshops[];
}
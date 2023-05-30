import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn,} from 'typeorm';
import {Dishes} from "../dishes/dishes.entity";
import {Cooks} from "../cooks/cook.entity";
import {IsString} from "class-validator";

@Entity('workshops') //указываем что это не просто клаcс, а сущность в рамках TypeOrm, в БД будет храниться как таблица
export class Workshops {
    @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
    id: number;

    @IsString()
    @Column({}) //колонка таблицы, сюда можно добавить большое количество параметров для БД, например тип, уникальность, триггер и т.д.
    title: string;

    @IsString()
    @Column()
    location: string;

    @IsString()
    @Column()
    menu: string;
    @ManyToMany (() => Dishes, (dishes) => dishes.workshops)
    @JoinTable({
        name: 'workshop_dishes',
        joinColumn: {name: 'workshop_id'},
        inverseJoinColumn: {name: 'dishes_id'},
    })
    dishes: Dishes[];

    @ManyToMany((type) => Cooks, (cooks) => cooks.workshops)
    @JoinTable({
        name: 'workshop_cooks',
        joinColumn: {name: 'workshop_id'},
        inverseJoinColumn: {name: 'cooks_id'},
    })
    cooks: Cooks[];
}

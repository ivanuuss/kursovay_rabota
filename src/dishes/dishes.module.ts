import { Module } from '@nestjs/common';
import {DatasourceModule} from "../datasource/datasource.module";
import {TypeOrmModule} from '@nestjs/typeorm';
import {Dishes} from "../dishes/dishes.entity";
import {DishesController} from "./dishes.controller";
import {DishesService} from "./dishes.service";
import {Workshops} from "../workshops/workshops.entity";
@Module({
    controllers: [DishesController],
    providers: [DishesService],
    imports: [
        DatasourceModule,
        TypeOrmModule.forFeature([Dishes, Workshops]),
    ],
})
export class DishesModule {}


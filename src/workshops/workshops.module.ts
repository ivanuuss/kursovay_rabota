import { Module } from '@nestjs/common';
import {WorkshopsController} from "./workshops.controller";
import {WorkshopsService} from "./workshops.service";
import {DatasourceModule} from "../datasource/datasource.module";
import {Workshops} from "./workshops.entity";
import {TypeOrmModule} from '@nestjs/typeorm';
import {Dishes} from "../dishes/dishes.entity";
import {Cooks} from "../cooks/cook.entity";
@Module({
    controllers: [WorkshopsController],
    providers: [WorkshopsService],
    imports: [TypeOrmModule.forFeature([Workshops, Dishes,Cooks]),],
})
export class WorkshopsModule {}


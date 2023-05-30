import { Module } from '@nestjs/common';
import {CooksController} from "./cooks.controller";
import {CooksService} from "./cooks.service";
import {DatasourceModule} from "../datasource/datasource.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Workshops} from "../workshops/workshops.entity";
import {Dishes} from "../dishes/dishes.entity";
import {Cooks} from "./cook.entity";

@Module({
    controllers: [CooksController],
    providers: [CooksService],
    imports: [TypeOrmModule.forFeature([Workshops,Cooks]),],
})
export class CooksModule {}


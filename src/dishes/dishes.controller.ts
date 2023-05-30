import { DishesService } from './dishes.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Dishes } from './dishes.entity';
import {ApiOperation, ApiTags} from "@nestjs/swagger";
import {CreateDishDto} from "./dto/DishDTO";
@ApiTags('Блюда')
@Controller('dishes')
export class DishesController {
    constructor(private readonly dishesService: DishesService) {}
    @ApiOperation({summary: 'Поиск всех блюд'})
    @Get()
    findAll() {
        return this.dishesService.findAll();
    }
    @ApiOperation({summary: 'Поиск конкретного блюда'})
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.dishesService.findOne(+id);
    }
//@param - извлечение параметров запроса, @body - извлечение тела запроса
    @ApiOperation({summary: 'Изменение блюда'})
    @Put(':id')
    update(@Param('id') id: string, @Body() updateDish: Dishes) {
        return this.dishesService.update(+id, updateDish);
    }
    @ApiOperation({summary: 'Создание блюда'})
    @Post()
    create(@Body() createDishes: CreateDishDto) {
        return this.dishesService.create(createDishes);
    }
    @ApiOperation({summary: 'Удаление блюда'})
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.dishesService.remove(+id);
    }
    @Get('incomplete')
    findIncomplete()
    {
        this.dishesService.findIncomplete();
    }
}

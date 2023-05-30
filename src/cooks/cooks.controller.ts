import { CooksService } from './cooks.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Cooks } from './cook.entity';
import {ApiOperation, ApiTags} from "@nestjs/swagger";
import {CreateCookDto} from "./dto/CookDTO";
@ApiTags('Повара')
@Controller('cooks')
export class CooksController {
    constructor(private readonly cooksService: CooksService) {}
    @ApiOperation({summary: 'Поиск всех поваров'})
    @Get()
    findAll() {
        return this.cooksService.findAll();
    }
    @ApiOperation({summary: 'Поиск конкретного повара'})
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.cooksService.findOne(+id);
    }
    @ApiOperation({summary: 'Изменение повара'})
    @Put(':id')
    update(@Param('id') id: string, @Body() updateCook: Cooks) {
        return this.cooksService.update(+id, updateCook);
    }
    @ApiOperation({summary: 'Добавление повара'})
    @Post()
    create(@Body() cookDto: CreateCookDto) : Promise<Cooks>{
        return this.cooksService.create(cookDto);
    }
    @ApiOperation({summary: 'Удаление повара'})
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.cooksService.remove(+id);
    }
}

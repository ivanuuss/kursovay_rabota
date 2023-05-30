import { WorkshopsService } from './workshops.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Workshops } from './workshops.entity';
import {ApiOperation, ApiTags} from "@nestjs/swagger";
import {CreateWorkshopDto} from "./dto/WorkshopDTO";

@Controller('workshops')
@ApiTags('Цехи')
export class WorkshopsController {
    constructor(private readonly workshopsService: WorkshopsService) {}

    @ApiOperation({summary: 'Поиск всех цехов'})
    @Get()
    findAll() {
        return this.workshopsService.findAll();
    }
    @ApiOperation({summary: 'Поиск конкретного цеха'})
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.workshopsService.findOne(+id);
    }

    @ApiOperation({summary: 'Изменение цеха'})
    @Put(':id')
    update(@Param('id') id: string, @Body() updateWorkshops: Workshops) {
        return this.workshopsService.update(+id, updateWorkshops);
    }
    @ApiOperation({summary: 'Создание цеха'})
    @Post()
    create(@Body() workshopsDTO: CreateWorkshopDto) : Promise<Workshops>{
        return this.workshopsService.create(workshopsDTO);
    }
    @ApiOperation({summary: 'Удаление цеха'})
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.workshopsService.remove(+id);
    }
    @Get('incomplete')
    findIncomplete()
    {
        this.workshopsService.findIncomplete();
    }
}

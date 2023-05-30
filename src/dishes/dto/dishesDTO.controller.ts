import {DishesService } from 'src/dishes/dishes.service';
import {Controller, Get} from '@nestjs/common';

@Controller('dishes')
export class ClientsController {
    constructor(private readonly dishesService: DishesService) {}

    @Get('incomplete')
    findIncomplete() {
        this.dishesService.findIncomplete();
    }
}
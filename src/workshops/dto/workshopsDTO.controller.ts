import {WorkshopsService } from 'src/workshops/workshops.service';
import {Controller, Get} from '@nestjs/common';

@Controller('workshops')
export class ClientsController {
    constructor(private readonly workshopsService: WorkshopsService) {}

    @Get('incomplete')
    findIncomplete() {
        this.workshopsService.findIncomplete();
    }
}
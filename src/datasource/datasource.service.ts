import { Injectable } from '@nestjs/common';
import { Workshops } from 'src/workshops/workshops.entity';
import { Cooks } from 'src/cooks/cook.entity';
import { Dishes } from 'src/dishes/dishes.entity';
@Injectable()
export class DatasourceService {
    private workshops: Workshops[] = [];

    getWorkshops(): Workshops[] {
        return this.workshops;
    }

    private cooks: Cooks[] = [];

    getCooks(): Cooks[] {
        return this.cooks;
    }
    private dishes: Dishes[] = [];

    getDishes(): Dishes[] {
        return this.dishes;
    }
}

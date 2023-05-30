import {HttpStatus, Injectable} from "@nestjs/common";
import {DatasourceService} from "../datasource/datasource.service";
import {Dishes} from "./dishes.entity";
import {Workshops} from "../workshops/workshops.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {In, Repository} from "typeorm";
import {CreateDishDto} from "./dto/DishDTO";
import {IncompleteWorkshopDto} from "../workshops/dto/incomplete-workshop.dto";
import {IncompleteDishDto} from "./dto/incomplete-dish.dto";

@Injectable()
export class DishesService
{
    constructor(@InjectRepository(Workshops)
                private readonly workshopsRepository: Repository<Workshops>,
                @InjectRepository(Dishes)
                private readonly dishesRepository: Repository<Dishes>,) {}
    async create(dishDto: CreateDishDto): Promise<Dishes>
    {
        const dish = this.dishesRepository.create();
        dish.id = dishDto.id;
        dish.nameofthedish = dishDto.nameofthedish;
        dish.workshoplocation = dishDto.workshoplocation;
        dish.ingredients = dishDto.ingredients;
        await this.dishesRepository.save(dish);
        return dish
    }
    findOne(id:number)
    {
        return this.dishesRepository.findOne({
            where:{id},
        })
    }
    async findAll() : Promise<Dishes[]>
    {
        return await this.dishesRepository.find();
    }
    async update(id: number, updatedDish: Dishes)
    {
        const dish= await this.dishesRepository.findOne({
            where:{id}
        })
        dish.id = updatedDish.id;
        dish.workshoplocation = updatedDish.workshoplocation;
        dish.nameofthedish = updatedDish.nameofthedish ;
        dish.ingredients = updatedDish.ingredients;
        await this.dishesRepository.save(dish);
        return dish;
    }
    remove(id: number)
    {
        this.dishesRepository.delete({id});
    }
    async findIncomplete(): Promise<IncompleteDishDto[]>
    {
        const dish= await this.dishesRepository.find();
        const incompleteDish : IncompleteDishDto[] = dish.map((dish) => {
            const incompleteDish= new IncompleteDishDto();
            incompleteDish.id = dish.id;
            incompleteDish.nameofthedish = dish.nameofthedish;
            return incompleteDish;
        });
        return incompleteDish;
    }

}
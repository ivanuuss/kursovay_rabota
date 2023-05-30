import {HttpStatus, Injectable} from "@nestjs/common";
import {DatasourceService} from "../datasource/datasource.service";
import {Workshops} from "./workshops.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {In,Repository} from "typeorm";
import {Dishes} from "../dishes/dishes.entity";
import {CreateWorkshopDto} from "./dto/WorkshopDTO";
import {IncompleteWorkshopDto} from "./dto/incomplete-workshop.dto";
import {Cooks} from "../cooks/cook.entity";



@Injectable()
export class WorkshopsService
{
    constructor(@InjectRepository(Workshops)
                private readonly workshopsRepository: Repository<Workshops>,
                @InjectRepository(Dishes)
                private readonly dishesRepository: Repository<Dishes>,

                @InjectRepository(Cooks)
                private readonly cooksRepository: Repository<Dishes>,)
    {

    }
    async create(workshopDto: CreateWorkshopDto): Promise<Workshops>
    {
        const workshop = this.workshopsRepository.create();
        workshop.id = workshopDto.id;
        workshop.location = workshopDto.location;
        workshop.title = workshopDto.title;
        workshop.menu = workshopDto.title
        await this.workshopsRepository.save(workshop);
        return workshop;
    }
    findOne(id:number): Promise<Workshops>
    {
        return this.workshopsRepository.findOne({
            where: {id},
            relations: {cooks: true,
                dishes: true,},
        })
    }
    async findAll() : Promise<Workshops[]>
    {
        return await this.workshopsRepository.find({
            relations: {cooks:true,
                dishes: true,},
        });
    }
    async update(id: number, updatedWorkshop: Workshops)
    {
        const workshop = await this.workshopsRepository.findOne({where:{id}});
        workshop.id= updatedWorkshop.id;
        workshop.location= updatedWorkshop.location;
        workshop.title = updatedWorkshop.title;
        workshop.menu= updatedWorkshop.menu;
        await this.workshopsRepository.save(workshop);
        return workshop;
    }
    remove(id: number)
    {
        this.workshopsRepository.delete({id});
    }

    async findIncomplete(): Promise<IncompleteWorkshopDto[]> {
        const workshops = await this.workshopsRepository.find();
        const incompleteWorkshop : IncompleteWorkshopDto[] = workshops.map((workshop) => {
            const incompleteWorkshop = new IncompleteWorkshopDto();
            incompleteWorkshop.id = workshop.id ;
            incompleteWorkshop.title = workshop.title;
            incompleteWorkshop.location = workshop.title;
            return incompleteWorkshop;
        });
        return incompleteWorkshop;
    }
}
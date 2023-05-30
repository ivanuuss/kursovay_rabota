import {HttpStatus, Injectable} from "@nestjs/common";
import {Cooks} from "./cook.entity";
import {DatasourceService} from "../datasource/datasource.service";
import {Workshops} from "../workshops/workshops.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {In, Repository} from "typeorm";
import {CreateCookDto} from "./dto/CookDTO";


@Injectable()
export class CooksService {

    constructor(
        @InjectRepository(Cooks)
        private readonly cooksRepository: Repository<Cooks>,
        @InjectRepository(Workshops)
        private readonly worksshopRepository: Repository<Workshops>) {}


    async create(cookDto: CreateCookDto): Promise<Cooks> {
        const cook = this.cooksRepository.create();
        cook.id = cookDto.id;
        cook.fullname = cookDto.fullname;
        cook.position = cookDto.position;
        cook.workexperience = cookDto.workexperience;
        await this.cooksRepository.save(cook);
        return cook;
    }

    findOne(id: number) {
        return this.cooksRepository.findOne({
            where: {id}
        })
    }

    async findAll(): Promise<Cooks[]> {
        return await this.cooksRepository.find();
    }

    async update(id: number, updatedCooks: Cooks) {
        const cooks = await this.cooksRepository.findOne({where: {id} });
        cooks.id = updatedCooks.id;
        cooks.fullname = updatedCooks.fullname;
        cooks.position = updatedCooks.position;
        cooks.workexperience = updatedCooks.workexperience ;
        await this.cooksRepository.save(cooks);
        return cooks;
    }

    remove(id: number) {
        this.cooksRepository.delete({id});
    }
}

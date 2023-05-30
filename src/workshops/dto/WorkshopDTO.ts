import {IsNotEmpty, IsString, MaxLength, MinLength} from "class-validator";

export class CreateWorkshopDto
{
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(20)
    id: number;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(20)
    title: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(20)
    location: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(20)
    menu: string;

    cooks: number[]
    dishes: number[]
}


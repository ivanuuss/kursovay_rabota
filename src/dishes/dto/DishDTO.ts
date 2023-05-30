import {IsNotEmpty, IsString, MinLength,MaxLength } from 'class-validator'
export class CreateDishDto
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
    nameofthedish: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(20)
    ingredients: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(20)
    workshoplocation: string;

    workshops: number[]

}

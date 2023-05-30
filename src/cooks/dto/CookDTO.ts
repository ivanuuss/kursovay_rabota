import {IsNotEmpty, IsString, MaxLength, MinLength} from "class-validator";

export class CreateCookDto
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
    fullname: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(20)
    position: string;

    workexperience:string;

    workshops: number[]

}

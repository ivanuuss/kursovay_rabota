import {Controller, Get, Post, UseGuards, UsePipes, ValidationPipe} from '@nestjs/common';
import { UsersService } from './user.service';
import { User } from './user.entity';
import { JwtAuthGuard } from 'src/user/auth/jwt-auth.guard';
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    @Get()
    @UseGuards(JwtAuthGuard)
    async findAll(): Promise<User[]> {
        return [{ id: 1, username: 'john', password: 'changeme' }];
    }

}

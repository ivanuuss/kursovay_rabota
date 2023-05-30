import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/user.entity';
import { UsersService } from 'src/user/user.service';
import { JwtPayload } from 'src/user/auth/jwt.payload';
@Injectable()
export class AuthService {
    constructor (
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,

    ) {}
    async validateUser(payload: JwtPayload): Promise<User> {
        return this.usersService.findOne(payload.username);
    }
    async login(userDto: User) {
        const payload: { username: string } = { username: userDto.username };
        const user = await this.usersService.login(userDto);
        if (!user) return null;
        return {
            access_token: this.jwtService.sign(payload),
        };
    }}
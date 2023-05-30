import {
    Body,
    Controller,
    Post,
    UnauthorizedException,
    UseGuards,
} from '@nestjs/common';
import {ApiBearerAuth, ApiTags} from '@nestjs/swagger';
import { User } from 'src/user/user.entity';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from 'src/user/auth/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';
@Controller('auth')
export class AuthController {
    constructor (private readonly authService: AuthService) {}
    @Post
    ('login')
    @UseGuards(AuthGuard('local'))
    async login(@Body() user: User) {
        const result = await this.authService.login(user);
        if (!result) {
            return new UnauthorizedException('Username or password is incorrect');
        }
        return result;
    }
    @Post
    ('profile')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth
    ('access-token')
    async profile() {
        return 'Authorized';
    } }

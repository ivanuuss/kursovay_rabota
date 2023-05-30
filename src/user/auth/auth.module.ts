import { Module } from '@nestjs/common';
import { AuthService } from 'src/user/auth/auth.service';
import { AuthController } from 'src/user/auth/auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/user/user.module';
@Module({
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
    imports: [
        UsersModule,
        JwtModule.register({
            secret: 'secret',
            signOptions: { expiresIn: '1d' },
        }),
        PassportModule.register({ defaultStrategy: 'jwt' }),
    ],
    exports: [AuthService],
})
export class AuthModule {}

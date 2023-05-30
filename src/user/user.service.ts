import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
@Injectable()
export class UsersService
{
    private readonly users: User[];
    constructor() {
        this.users = [
            {
                id: 1,
                username: 'john',
                password: 'changeme',
            },
        ];
    }
    async login(userDto: User): Promise <any | { status: number }> {
    const user = await this.findOne(userDto.username);
    if (!user) {
        return Promise.resolve(null);
    }
    if (user.password !== userDto.password) {
        throw new Error
        ('Неверно введённые данные');
    }
    return user;
}
async findOne(username: string): Promise<User | undefined> {
    return this.users.find(
        (user) => user.username === username);
} }

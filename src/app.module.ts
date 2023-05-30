import { Module } from '@nestjs/common';
import {WorkshopsModule} from "./workshops/workshops.module";
import {DatasourceModule} from "./datasource/datasource.module";
import {CooksModule} from "./cooks/cooks.module";
import {DishesModule} from "./dishes/dishes.module";
import {TypeOrmModule } from '@nestjs/typeorm';
import {JwtAuthGuard} from "./user/auth/jwt-auth.guard";
import {UsersModule} from "./user/user.module";
import {AuthModule} from "./user/auth/auth.module";
import {JwtPayload} from "./user/auth/jwt.payload";

@Module({
  imports: [
      WorkshopsModule ,
      CooksModule,
      DishesModule,
      DatasourceModule,
      TypeOrmModule.forRoot({
          type: 'postgres', //тип подключаемой БД
          port: 5432, //порт
          username: 'postgres', //имя пользователя
          password: 'postgres',
          database: 'education',
          host: 'localhost', //хост, в нашем случае БД развернута локально
          synchronize: false, //отключаем автосинхронизацию(в противном случае при каждом перезапуске наша БД будет создаваться заново)
          logging: 'all', //включим логирование для удобства отслеживания процессов
          entities: ['dist/**/*.entity{.ts,.js}'], //указываем путь к сущностям
      }),
      UsersModule,
      AuthModule,
  ],
  controllers: [],
  providers: [JwtAuthGuard],
})
export class AppModule {}

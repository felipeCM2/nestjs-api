import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'joseaa',
      database: 'nestTest',
      entities: [User],
      synchronize: true,
    }),
    AuthModule,
    MulterModule.register({
      dest: '../files',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

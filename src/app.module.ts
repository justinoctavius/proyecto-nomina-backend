import { Module } from '@nestjs/common';
import { UsersModule } from './apps/users/api/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'ormconfig';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot(dataSourceOptions)],
})
export class AppModule {}

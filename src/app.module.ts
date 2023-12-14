import { Module } from '@nestjs/common';
import { UsersModule } from './apps/users/api/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'ormconfig';
import { EmployeesModule } from './apps/employees/api/employee.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    UsersModule,
    EmployeesModule,
  ],
})
export class AppModule {}

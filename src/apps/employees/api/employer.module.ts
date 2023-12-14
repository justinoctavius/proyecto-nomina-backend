import { Module } from '@nestjs/common';
import { EmployeesController } from './controllers/employees.controller';
import { EmployeesService } from './services/employees.service';

@Module({
  imports: [],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployerModule {}

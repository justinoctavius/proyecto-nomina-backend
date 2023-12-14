import { Module } from '@nestjs/common';
import { EmployeesController } from './controllers/employees.controller';
import { EmployeesService } from './services/employees.service';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { DepartmentsService } from './services/departments.service';
import { DepartmentsController } from './controllers/departments.controller';

@Module({
  imports: [InfrastructureModule],
  controllers: [EmployeesController, DepartmentsController],
  providers: [EmployeesService, DepartmentsService],
})
export class EmployeesModule {}

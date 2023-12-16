import { Module } from '@nestjs/common';
import { EmployeesController } from './controllers/employees.controller';
import { EmployeesService } from './services/employees.service';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { DepartmentsService } from './services/departments.service';
import { DepartmentsController } from './controllers/departments.controller';
import { PositionsController } from './controllers/positions.controller';
import { PositionsService } from './services/positions.service';

@Module({
  imports: [InfrastructureModule],
  controllers: [
    EmployeesController,
    DepartmentsController,
    PositionsController,
  ],
  providers: [EmployeesService, DepartmentsService, PositionsService],
})
export class EmployeesModule {}

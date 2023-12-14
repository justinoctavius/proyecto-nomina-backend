import { Module } from '@nestjs/common';
import { EmployeesController } from './controllers/employees.controller';
import { EmployeesService } from './services/employees.service';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';

@Module({
  imports: [InfrastructureModule],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeesModule {}

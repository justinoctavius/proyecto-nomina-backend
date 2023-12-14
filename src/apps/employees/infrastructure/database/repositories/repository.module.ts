import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  DEPARTMENTS_REPOSITORY,
  EMPLOYEES_REPOSITORY,
  POSITIONS_REPOSITORY,
} from 'src/apps/employees/domain/constants/repositories-tokens';
import { DepartmentsRepository } from './departments.repository';
import { PositionsRepository } from './positions.repository';
import { EmployeesRepository } from './employees.repository';
import { DepartmentEntity } from '../entities/department.entity';
import { PositionEntity } from '../entities/position.entity';
import { EmployeeEntity } from '../entities/employee.entity';

const departmentRepositoryProvider = {
  provide: DEPARTMENTS_REPOSITORY,
  useClass: DepartmentsRepository,
};

const positionsRepositoryProvider = {
  provide: POSITIONS_REPOSITORY,
  useClass: PositionsRepository,
};

const employeeRepositoryProvider = {
  provide: EMPLOYEES_REPOSITORY,
  useClass: EmployeesRepository,
};

@Module({
  imports: [
    TypeOrmModule.forFeature([
      DepartmentEntity,
      PositionEntity,
      EmployeeEntity,
    ]),
  ],
  providers: [
    departmentRepositoryProvider,
    positionsRepositoryProvider,
    employeeRepositoryProvider,
  ],
  exports: [
    departmentRepositoryProvider,
    positionsRepositoryProvider,
    employeeRepositoryProvider,
  ],
})
export class RepositoriesModule {}

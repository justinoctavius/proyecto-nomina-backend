import { Module, Provider } from '@nestjs/common';
import { CreateEmployeeUseCases } from './uses-cases/employee/create-employee.use-case';
import { DeleteEmployeeUseCase } from './uses-cases/employee/delete-employee.use-case';
import { FindAllEmployeesUseCase } from './uses-cases/employee/find-all-employees-use-case';
import { UpdateEmployeeUseCase } from './uses-cases/employee/update-employee.use-case';
import { CreateDepartmentUseCases } from './uses-cases/department/create-department.use-case';
import { DeleteDepartmentUseCase } from './uses-cases/department/delete-department.use-case';
import { FindAllDepartmentUseCase } from './uses-cases/department/find-all-department-use-case';
import { UpdateDepartmentUseCase } from './uses-cases/department/update-department.use-case';
import { CreatePositionUseCases } from './uses-cases/position/create-position.use-case';
import { DeletePositionUseCase } from './uses-cases/position/delete-position.use-case';
import { FindAllPositionUseCase } from './uses-cases/position/find-all-position-use-case';
import { UpdatePositionUseCase } from './uses-cases/position/update-position.use-case';

const useCasesProviders: Provider[] = [
  CreateEmployeeUseCases,
  DeleteEmployeeUseCase,
  FindAllEmployeesUseCase,
  UpdateEmployeeUseCase,
];

const departmentsUseCasesProviders: Provider[] = [
  CreateDepartmentUseCases,
  DeleteDepartmentUseCase,
  FindAllDepartmentUseCase,
  UpdateDepartmentUseCase,
];

const positionsUseCasesProviders: Provider[] = [
  CreatePositionUseCases,
  DeletePositionUseCase,
  FindAllPositionUseCase,
  UpdatePositionUseCase,
];

@Module({})
export class DomainModule {
  static forRoot(imports: any[]) {
    return {
      module: DomainModule,
      imports: imports,
      providers: [
        ...useCasesProviders,
        ...departmentsUseCasesProviders,
        ...positionsUseCasesProviders,
      ],
      exports: [
        ...useCasesProviders,
        ...departmentsUseCasesProviders,
        ...positionsUseCasesProviders,
      ],
    };
  }
}

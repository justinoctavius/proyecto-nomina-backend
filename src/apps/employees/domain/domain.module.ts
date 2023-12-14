import { Module, Provider } from '@nestjs/common';
import { CreateEmployeeUseCases } from './uses-cases/employee/create-employee.use-case';
import { DeleteEmployeeUseCase } from './uses-cases/employee/delete-employee.use-case';
import { FindAllEmployeesUseCase } from './uses-cases/employee/find-all-employees-use-case';
import { UpdateEmployeeUseCase } from './uses-cases/employee/update-employee.use-case';

const useCasesProviders: Provider[] = [
  CreateEmployeeUseCases,
  DeleteEmployeeUseCase,
  FindAllEmployeesUseCase,
  UpdateEmployeeUseCase,
];

@Module({})
export class DomainModule {
  static forRoot(imports: any[]) {
    return {
      module: DomainModule,
      imports: imports,
      providers: [...useCasesProviders],
      exports: [...useCasesProviders],
    };
  }
}

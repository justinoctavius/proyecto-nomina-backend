import { Module, Provider } from '@nestjs/common';
import { CreateEmployeeUseCases } from './uses-cases/create-employee.use-case';
import { DeleteEmployeeUseCase } from './uses-cases/delete-employee.use-case';
import { FindAllEmployeesUseCase } from './uses-cases/find-all-employees-use-case';
import { UpdateEmployeeUseCase } from './uses-cases/update-employee.use-case';

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

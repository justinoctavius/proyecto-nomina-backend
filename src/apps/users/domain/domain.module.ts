import { Module, Provider } from '@nestjs/common';
import { CreateUserUseCase } from './uses-cases/create-user.use-case';
import { FindAllRolesUseCase } from './uses-cases/find-all-roles.use-case';
import { FindAllUsersUseCase } from './uses-cases/find-all-users.use-case';
import { UpdateUserUseCase } from './uses-cases/update-user.use-case';
import { DeleteUserUseCase } from './uses-cases/delete-user.use-case';

const useCasesProviders: Provider[] = [
  CreateUserUseCase,
  UpdateUserUseCase,
  FindAllRolesUseCase,
  FindAllUsersUseCase,
  DeleteUserUseCase,
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

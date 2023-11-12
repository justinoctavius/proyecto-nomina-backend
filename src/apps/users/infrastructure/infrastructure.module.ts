import { Module } from '@nestjs/common';
import { RepositoriesModule } from './database/repositories/repositories.module';
import { CreateUserUseCase } from '../domain/uses-cases/create-user.use-case';
import { DeleteUserUseCase } from '../domain/uses-cases/delete-user.use-case';
import { FindAllUsersUseCase } from '../domain/uses-cases/find-all-users.use-case';
import { UpdateUserUseCase } from '../domain/uses-cases/update-user.use-case';

@Module({
  imports: [RepositoriesModule],
  providers: [
    CreateUserUseCase,
    DeleteUserUseCase,
    FindAllUsersUseCase,
    UpdateUserUseCase,
  ],
  exports: [
    CreateUserUseCase,
    DeleteUserUseCase,
    FindAllUsersUseCase,
    UpdateUserUseCase,
  ],
})
export class InfrastructureModule {}

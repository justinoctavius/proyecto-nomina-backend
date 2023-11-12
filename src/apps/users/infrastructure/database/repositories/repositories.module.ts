import { Module } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { RolesRepository } from './roles.repository';
import {
  ROLES_REPOSITORY,
  USERS_REPOSITORY,
} from 'src/apps/users/domain/constants/repositories-tokens';

const usersRepositoryProvider = {
  provide: USERS_REPOSITORY,
  useClass: UsersRepository,
};

const rolesRepositoryProvider = {
  provide: ROLES_REPOSITORY,
  useClass: RolesRepository,
};

@Module({
  providers: [usersRepositoryProvider, rolesRepositoryProvider],
  exports: [usersRepositoryProvider, rolesRepositoryProvider],
})
export class RepositoriesModule {}

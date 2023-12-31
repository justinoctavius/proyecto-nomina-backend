import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';
import { RolesRepository } from './roles.repository';
import {
  ROLES_REPOSITORY,
  USERS_REPOSITORY,
} from 'src/apps/users/domain/constants/repositories-tokens';
import { UserEntity } from '../entities/user.entity';
import { RoleEntity } from '../entities/role.entity';
import { MappersModule } from '../mappers/mappers.module';

const usersRepositoryProvider = {
  provide: USERS_REPOSITORY,
  useClass: UsersRepository,
};

const rolesRepositoryProvider = {
  provide: ROLES_REPOSITORY,
  useClass: RolesRepository,
};

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, RoleEntity]), MappersModule],
  providers: [usersRepositoryProvider, rolesRepositoryProvider],
  exports: [usersRepositoryProvider, rolesRepositoryProvider],
})
export class RepositoriesModule {}

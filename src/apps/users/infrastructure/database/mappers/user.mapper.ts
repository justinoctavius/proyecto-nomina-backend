import { Injectable } from '@nestjs/common';
import { User } from 'src/apps/users/domain/entities/user/users';
import { UserEntity } from '../entities/user.entity';
import { RoleMapper } from './role.mapper';

@Injectable()
export class UserMapper {
  mapToDomain(entity: UserEntity) {
    const { id, name, email, password, role } = entity;
    return new User(
      id,
      name,
      email,
      password,
      new RoleMapper().mapToDomain(role),
    );
  }

  mapToPersistence(entity: User) {
    const { id, name, email, password, role } = entity;
    return {
      id,
      name,
      email,
      password,
      role: new RoleMapper().mapToPersistence(role),
    };
  }
}

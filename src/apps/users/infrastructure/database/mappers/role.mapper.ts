import { Injectable } from '@nestjs/common';
import { Role } from 'src/apps/users/domain/entities/role';
import { RoleEntity } from '../entities/role.entity';

@Injectable()
export class RoleMapper {
  mapToDomain(roleEntity: RoleEntity) {
    return new Role(
      roleEntity.id,
      roleEntity.type,
      roleEntity.name,
      roleEntity.description,
    );
  }

  mapToPersistence(role: Role): RoleEntity {
    return {
      id: role.id,
      type: role.type,
      name: role.name,
      description: role.description,
    };
  }
}

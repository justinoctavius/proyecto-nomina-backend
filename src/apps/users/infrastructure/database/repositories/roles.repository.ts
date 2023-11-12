import { Injectable } from '@nestjs/common';
import { Role } from 'src/apps/users/domain/entities/role';
import { Repository } from '../../../domain/interfaces/repository.interface';
import { RolesTypes } from 'src/apps/users/domain/constants/roles-types';

let roles: Role[] = [
  new Role('1', RolesTypes.ADMIN, 'administrador'),
  new Role('2', RolesTypes.EDITOR, 'editor'),
  new Role('3', RolesTypes.EMPLOYEE, 'empleado'),
  new Role('4', RolesTypes.READ_ONLY, 'solo lectura'),
];

@Injectable()
export class RolesRepository implements Repository<Role> {
  async save(entity: Role): Promise<void> {
    roles.push(entity);
  }
  async update(id: string, entity: Role): Promise<void> {
    roles = roles.map((role) => {
      if (role.id === id) {
        return entity;
      }
      return role;
    });
  }
  async delete(id: string): Promise<void> {
    roles = roles.filter((role) => role.id !== id);
  }
  async findById(id: string): Promise<Role> {
    return roles.find((role) => role.id === id);
  }
  async findAll(limit?: number, offset?: number): Promise<Role[]> {
    return roles.slice(offset, limit);
  }
}

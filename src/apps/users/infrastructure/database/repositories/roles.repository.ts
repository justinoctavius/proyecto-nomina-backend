import { Injectable } from '@nestjs/common';
import { Role } from 'src/apps/users/domain/entities/role';
import { Repository } from '../../../domain/interfaces/repository.interface';

@Injectable()
export class RolesRepository implements Repository<Role> {
  save(entity: Role): Promise<Role> {
    throw new Error('Method not implemented.');
  }
  update(id: string, entity: Role): Promise<Role> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<Role> {
    throw new Error('Method not implemented.');
  }
  findAll(limit?: number, offset?: number): Promise<Role[]> {
    throw new Error('Method not implemented.');
  }
  findByProps(props: any): Promise<Role[]> {
    throw new Error('Method not implemented.');
  }
}

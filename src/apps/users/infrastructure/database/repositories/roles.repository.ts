import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository as DBRepository } from 'typeorm';
import { Role } from 'src/apps/users/domain/entities/role';
import { Repository } from 'src/apps/shared/interfaces/repository.interface';
import { RoleEntity } from '../entities/role.entity';
import { RoleMapper } from '../mappers/role.mapper';

@Injectable()
export class RolesRepository implements Repository<Role> {
  constructor(
    @InjectRepository(RoleEntity)
    private readonly rolesRepository: DBRepository<RoleEntity>,
    private readonly roleMapper: RoleMapper,
  ) {}

  async save(role: Role): Promise<void> {
    const roleEntity = this.roleMapper.mapToPersistence(role);
    await this.rolesRepository.save(roleEntity);
  }

  async update(id: string, role: Role): Promise<void> {
    const roleEntity = this.roleMapper.mapToPersistence(role);
    await this.rolesRepository.update(id, roleEntity);
  }

  async delete(id: string): Promise<void> {
    await this.rolesRepository.delete(id);
  }

  async findById(id: string): Promise<Role> {
    const roleEntity = await this.rolesRepository.findOne({ where: { id } });
    return this.roleMapper.mapToDomain(roleEntity);
  }

  async findAll(limit?: number, offset?: number): Promise<Role[]> {
    const rolesEntities = await this.rolesRepository.find({
      take: limit,
      skip: offset,
    });

    const roles = rolesEntities.map(this.roleMapper.mapToDomain);

    return roles;
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Repository as IRepository } from 'src/apps/shared/interfaces/repository.interface';
import { Department } from 'src/apps/employees/domain/entities/department/department';
import { DepartmentEntity } from '../entities/department.entity';
import { DepartmentMapper } from '../mappers/department.mapper';

@Injectable()
export class DepartmentsRepository implements IRepository<Department> {
  constructor(
    @InjectRepository(DepartmentEntity)
    private readonly departmentEntity: Repository<DepartmentEntity>,
  ) {}

  async save(entity: Department): Promise<void> {
    await this.departmentEntity.save(DepartmentMapper.toPersistence(entity));
  }

  async update(id: string, entity: Department): Promise<void> {
    await this.departmentEntity.update(
      id,
      DepartmentMapper.toPersistence(entity),
    );
  }

  async delete(id: string): Promise<void> {
    await this.departmentEntity.delete(id);
  }

  async findById(id: string): Promise<Department> {
    const DepartmentEntity = await this.departmentEntity.findOne({
      where: { id },
    });
    return DepartmentMapper.toDomain(DepartmentEntity);
  }

  async findAll(limit?: number, offset?: number): Promise<Department[]> {
    const DepartmentsEntities = await this.departmentEntity.find({
      take: limit,
      skip: offset,
    });
    return DepartmentsEntities.map(DepartmentMapper.toDomain);
  }
}

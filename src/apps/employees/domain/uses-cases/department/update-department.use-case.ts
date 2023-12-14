import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { UpdateDepartmentUseCaseProps } from './interfaces/update-department.interface';
import {
  DEPARTMENTS_REPOSITORY,
  EMPLOYEES_REPOSITORY,
  POSITIONS_REPOSITORY,
} from '../../constants/repositories-tokens';
import { Repository } from 'src/apps/shared/interfaces/repository.interface';
import { EmployeesRepository } from '../../interfaces/employees-repository.interface';
import { Department } from '../../entities/department/department';
import { Position } from '../../entities/position/position';

@Injectable()
export class UpdateDepartmentUseCase {
  constructor(
    @Inject(DEPARTMENTS_REPOSITORY)
    private readonly departmentsRepository: Repository<Department>,
  ) {}

  async execute(id: string, props: UpdateDepartmentUseCaseProps) {
    const department = await this.findDepartmentById(id);

    const departmentUpdated = department.update(props);

    await this.departmentsRepository.update(id, departmentUpdated);
  }

  private async findDepartmentById(id: string) {
    const department = await this.departmentsRepository.findById(id);

    if (!department) {
      throw new NotFoundException('Department not found');
    }

    return department;
  }
}

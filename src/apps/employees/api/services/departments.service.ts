import { Injectable } from '@nestjs/common';
import { FindAllDepartmentUseCase } from '../../domain/uses-cases/department/find-all-department-use-case';
import { CreateDepartmentUseCases } from '../../domain/uses-cases/department/create-department.use-case';
import { UpdateDepartmentUseCase } from '../../domain/uses-cases/department/update-department.use-case';
import { DeleteDepartmentUseCase } from '../../domain/uses-cases/department/delete-department.use-case';
import { CreateDepartmentDto } from '../dtos/create-department.dto';
import { UpdateDepartmentDto } from '../dtos/update-department.dto';

@Injectable()
export class DepartmentsService {
  constructor(
    private readonly findAllDepartmentUseCase: FindAllDepartmentUseCase,
    private readonly createDepartmentUseCase: CreateDepartmentUseCases,
    private readonly updateDepartmentUseCase: UpdateDepartmentUseCase,
    private readonly deleteDepartmentUseCase: DeleteDepartmentUseCase,
  ) {}

  async findAll(limit?: number, offset?: number) {
    return await this.findAllDepartmentUseCase.execute({ limit, offset });
  }

  async create(createEmployerDto: CreateDepartmentDto) {
    return await this.createDepartmentUseCase.execute(createEmployerDto);
  }

  async update(id: string, updateEmployerDto: UpdateDepartmentDto) {
    return await this.updateDepartmentUseCase.execute(id, updateEmployerDto);
  }

  async delete(id: string) {
    return await this.deleteDepartmentUseCase.execute(id);
  }
}

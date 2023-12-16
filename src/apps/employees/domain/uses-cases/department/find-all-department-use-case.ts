import { Inject, Injectable } from '@nestjs/common';
import { DEPARTMENTS_REPOSITORY } from '../../constants/repositories-tokens';
import { findAllDepartmentUseCaseProps } from './interfaces/find-all-department.interface';
import { Department } from '../../entities/department/department';
import { Repository } from 'src/apps/shared/interfaces/repository.interface';

@Injectable()
export class FindAllDepartmentUseCase {
  constructor(
    @Inject(DEPARTMENTS_REPOSITORY)
    private readonly departmentsRepository: Repository<Department>,
  ) {}

  async execute({ limit, offset }: findAllDepartmentUseCaseProps) {
    return await this.departmentsRepository.findAll(limit, offset);
  }
}

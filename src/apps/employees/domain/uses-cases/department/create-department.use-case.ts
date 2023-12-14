import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'src/apps/shared/interfaces/repository.interface';
import { DEPARTMENTS_REPOSITORY } from '../../constants/repositories-tokens';
import { CreateDepartmentUseCaseProps } from './interfaces/create-department.interface';
import { Department } from '../../entities/department/department';

@Injectable()
export class CreateDepartmentUseCases {
  constructor(
    @Inject(DEPARTMENTS_REPOSITORY)
    private readonly departmentsRepository: Repository<Department>,
  ) {}

  async execute(props: CreateDepartmentUseCaseProps) {
    const department = Department.create({ ...props });

    await this.departmentsRepository.save(department);
  }
}

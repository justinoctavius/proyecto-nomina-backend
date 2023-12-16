import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { DEPARTMENTS_REPOSITORY } from '../../constants/repositories-tokens';
import { Repository } from 'src/apps/shared/interfaces/repository.interface';
import { Department } from '../../entities/department/department';

@Injectable()
export class DeleteDepartmentUseCase {
  constructor(
    @Inject(DEPARTMENTS_REPOSITORY)
    private readonly departmentsRepository: Repository<Department>,
  ) {}

  async execute(id: string) {
    const department = await this.departmentsRepository.findById(id);

    if (!department) {
      throw new NotFoundException('Department not found');
    }

    await this.departmentsRepository.delete(id);
  }
}

import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { EMPLOYEES_REPOSITORY } from '../../constants/repositories-tokens';
import { EmployeesRepository } from '../../interfaces/employees-repository.interface';

@Injectable()
export class DeleteEmployeeUseCase {
  constructor(
    @Inject(EMPLOYEES_REPOSITORY)
    private readonly employeesRepository: EmployeesRepository,
  ) {}

  async execute(id: string) {
    const employees = await this.employeesRepository.findById(id);

    if (!employees) {
      throw new NotFoundException('Employee not found');
    }

    await this.employeesRepository.delete(id);
  }
}

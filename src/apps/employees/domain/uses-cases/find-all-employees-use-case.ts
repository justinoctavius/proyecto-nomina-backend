import { Inject, Injectable } from '@nestjs/common';
import { EMPLOYEES_REPOSITORY } from '../constants/repositories-tokens';
import { EmployeesRepository } from '../interfaces/employees-repository.interface';
import { findAllEmployeesUseCaseProps } from './interfaces/find-all-employee.interface';

@Injectable()
export class FindAllEmployeesUseCase {
  constructor(
    @Inject(EMPLOYEES_REPOSITORY)
    private readonly employeesRepository: EmployeesRepository,
  ) {}

  async execute({ limit, offset }: findAllEmployeesUseCaseProps) {
    return await this.employeesRepository.findAll(limit, offset);
  }
}

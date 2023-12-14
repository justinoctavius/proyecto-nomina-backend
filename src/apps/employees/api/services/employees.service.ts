import { Injectable } from '@nestjs/common';
import { CreateEmployerDto } from '../dtos/create-employer.dto';
import { UpdateEmployerDto } from '../dtos/update-employer.dto';
import { FindAllEmployeesUseCase } from '../../domain/uses-cases/find-all-employees-use-case';
import { UpdateEmployeeUseCase } from '../../domain/uses-cases/update-employee.use-case';
import { DeleteEmployeeUseCase } from '../../domain/uses-cases/delete-employee.use-case';
import { CreateEmployeeUseCases } from '../../domain/uses-cases/create-employee.use-case';

@Injectable()
export class EmployeesService {
  constructor(
    private readonly findAllEmployerUseCase: FindAllEmployeesUseCase,
    private readonly createEmployerUseCase: CreateEmployeeUseCases,
    private readonly updateEmployerUseCase: UpdateEmployeeUseCase,
    private readonly deleteEmployerUseCase: DeleteEmployeeUseCase,
  ) {}

  async findAll(limit?: number, offset?: number) {
    return await this.findAllEmployerUseCase.execute({ limit, offset });
  }

  async createUser(createEmployerDto: CreateEmployerDto) {
    return await this.createEmployerUseCase.execute(createEmployerDto);
  }

  async updateUser(id: string, updateEmployerDto: UpdateEmployerDto) {
    return await this.updateEmployerUseCase.execute(id, updateEmployerDto);
  }

  async deleteUser(id: string) {
    return await this.deleteEmployerUseCase.execute(id);
  }
}

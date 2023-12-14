import { Injectable } from '@nestjs/common';
import { CreateEmployerDto } from '../dtos/create-employer.dto';
import { UpdateEmployerDto } from '../dtos/update-employer.dto';

@Injectable()
export class EmployeesService {
  constructor() {}

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

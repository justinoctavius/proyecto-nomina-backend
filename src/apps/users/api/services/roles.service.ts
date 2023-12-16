import { Injectable } from '@nestjs/common';
import { FindAllRolesUseCase } from '../../domain/uses-cases/find-all-roles.use-case';

@Injectable()
export class RolesService {
  constructor(private readonly findAllRolesUseCase: FindAllRolesUseCase) {}

  async findAll() {
    return await this.findAllRolesUseCase.execute();
  }
}

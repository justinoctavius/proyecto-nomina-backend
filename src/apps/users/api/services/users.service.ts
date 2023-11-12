import { Injectable } from '@nestjs/common';
import { FindAllUsersUseCase } from '../../domain/uses-cases/find-all-users.use-case';

@Injectable()
export class UsersService {
  constructor(private readonly findAllUsersUseCase: FindAllUsersUseCase) {}

  async findAll() {
    return await this.findAllUsersUseCase.execute({});
  }
}

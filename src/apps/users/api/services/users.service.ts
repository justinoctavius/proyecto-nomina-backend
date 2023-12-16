import { Injectable } from '@nestjs/common';
import { FindAllUsersUseCase } from '../../domain/uses-cases/find-all-users.use-case';
import { CreateUserUseCase } from '../../domain/uses-cases/create-user.use-case';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { UpdateUserUseCase } from '../../domain/uses-cases/update-user.use-case';
import { DeleteUserUseCase } from '../../domain/uses-cases/delete-user.use-case';

@Injectable()
export class UsersService {
  constructor(
    private readonly findAllUsersUseCase: FindAllUsersUseCase,
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly updateUserUseCase: UpdateUserUseCase,
    private readonly deleteUserUseCase: DeleteUserUseCase,
  ) {}

  async findAll(limit?: number, offset?: number) {
    return await this.findAllUsersUseCase.execute({ limit, offset });
  }

  async createUser(createUserDto: CreateUserDto) {
    return await this.createUserUseCase.execute(createUserDto);
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto) {
    return await this.updateUserUseCase.execute(id, updateUserDto);
  }

  async deleteUser(id: string) {
    return await this.deleteUserUseCase.execute(id);
  }
}

import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'src/apps/shared/interfaces/repository.interface';
import {
  ROLES_REPOSITORY,
  USERS_REPOSITORY,
} from '../constants/repositories-tokens';
import { CreateUserUseCaseProps } from './interfaces/create-user.interface';
import { User } from '../entities/user/users';
import { Role } from '../entities/role';
import { RoleNotFoundException } from '../exceptions/role-not-found.exception';
import { UsersRepository } from '../interfaces/users-repository.interface';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject(USERS_REPOSITORY)
    private readonly usersRepository: UsersRepository,
    @Inject(ROLES_REPOSITORY)
    private readonly rolesRepository: Repository<Role>,
  ) {}

  async execute({ email, name, password, roleId }: CreateUserUseCaseProps) {
    await this.validateUserDoesNotExistByEmail(email);

    const role = await this.findRoleById(roleId);

    const user = await User.create({ email, name, password, role });

    await this.usersRepository.save(user);
  }

  private async validateUserDoesNotExistByEmail(email: string): Promise<void> {
    const user = await this.usersRepository.findByEmail(email);

    if (user) {
      throw new Error('User already exists');
    }
  }

  private async findRoleById(id: string): Promise<Role> {
    const role = await this.rolesRepository.findById(id);

    if (!role) {
      throw new RoleNotFoundException(id);
    }

    return role;
  }
}

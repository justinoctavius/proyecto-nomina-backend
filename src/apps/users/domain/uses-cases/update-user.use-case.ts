import { Injectable, Inject } from '@nestjs/common';
import { Role } from '../entities/role';
import { User } from '../entities/user/users';
import { UpdateUserUseCaseProps } from './interfaces/update-user.interface';
import { Repository } from '../interfaces/repository.interface';
import { RoleNotFoundException } from '../exceptions/role-not-found.exception';
import { UserNotFoundException } from '../exceptions/user-not-found.exception';
import {
  ROLES_REPOSITORY,
  USERS_REPOSITORY,
} from '../constants/repositories-tokens';

@Injectable()
export class UpdateUserUseCase {
  constructor(
    @Inject(USERS_REPOSITORY)
    private readonly usersRepository: Repository<User>,
    @Inject(ROLES_REPOSITORY)
    private readonly rolesRepository: Repository<Role>,
  ) {}

  async execute(id: string, { name, roleId }: UpdateUserUseCaseProps) {
    const user = await this.findUserById(id);

    let role = user.role;

    if (roleId) {
      role = await this.findRoleById(roleId);
    }

    const updatedUser = user.update({ name, role });

    await this.usersRepository.update(user.id, updatedUser);
  }

  private async findUserById(id: string): Promise<User> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new UserNotFoundException(id);
    }

    return user;
  }

  private async findRoleById(id: string): Promise<Role> {
    const role = await this.rolesRepository.findById(id);

    if (!role) {
      throw new RoleNotFoundException(id);
    }

    return role;
  }
}

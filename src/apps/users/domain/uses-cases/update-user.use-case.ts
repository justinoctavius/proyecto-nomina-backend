import { Role } from '../entities/role';
import { User } from '../entities/user/users';
import { UpdateUserUseCaseProps } from './interfaces/update-user.interface';
import { Repository } from '../interfaces/repository.interface';
import { RoleNotFoundException } from '../exceptions/role-not-found.exception';
import { UserNotFoundException } from '../exceptions/user-not-found.exception';

export class UpdateUserUseCase {
  constructor(
    private readonly usersRepository: Repository<User>,
    private readonly rolesRepository: Repository<Role>,
  ) {}

  async execute(id: string, { name, roleId }: UpdateUserUseCaseProps) {
    const user = await this.usersRepository.findById(id);

    let role = user.role;

    if (roleId) {
      role = await this.rolesRepository.findById(roleId);
    }

    if (!user) {
      throw new UserNotFoundException(id);
    }

    if (!role) {
      throw new RoleNotFoundException(roleId);
    }

    const updatedUser = user.update({ name, role });

    await this.usersRepository.update(user.id, updatedUser);
  }
}

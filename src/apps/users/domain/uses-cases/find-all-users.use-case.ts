import { Injectable, Inject } from '@nestjs/common';
import { findAllUsersUseCaseProps } from './interfaces/find-all-user.interface';
import { USERS_REPOSITORY } from '../constants/repositories-tokens';
import { UsersRepository } from '../interfaces/users-repository.interface';
import { User } from '../entities/user/users';

@Injectable()
export class FindAllUsersUseCase {
  constructor(
    @Inject(USERS_REPOSITORY)
    private readonly usersRepository: UsersRepository,
  ) {}

  async execute({ limit = 50, offset = 0 }: findAllUsersUseCaseProps) {
    const users = await this.usersRepository.findAll(limit, offset);

    return users.map(this.removePasswordFromUser);
  }

  private removePasswordFromUser(user: User) {
    const { password, ...userWithoutPassword } = user;

    return userWithoutPassword;
  }
}

import { Injectable, Inject } from '@nestjs/common';
import { UserNotFoundException } from '../exceptions/user-not-found.exception';
import { USERS_REPOSITORY } from '../constants/repositories-tokens';
import { UsersRepository } from '../interfaces/users-repository.interface';

@Injectable()
export class DeleteUserUseCase {
  constructor(
    @Inject(USERS_REPOSITORY)
    private readonly usersRepository: UsersRepository,
  ) {}

  async execute(id: string) {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new UserNotFoundException(id);
    }

    await this.usersRepository.delete(id);
  }
}

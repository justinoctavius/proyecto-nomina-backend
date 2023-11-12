import { Injectable, Inject } from '@nestjs/common';
import { User } from '../entities/user/users';
import { UserNotFoundException } from '../exceptions/user-not-found.exception';
import { Repository } from '../interfaces/repository.interface';
import { USERS_REPOSITORY } from '../constants/repositories-tokens';

@Injectable()
export class DeleteUserUseCase {
  constructor(
    @Inject(USERS_REPOSITORY)
    private readonly usersRepository: Repository<User>,
  ) {}

  async execute(id: string) {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new UserNotFoundException(id);
    }

    await this.usersRepository.delete(id);
  }
}

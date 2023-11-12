import { User } from '../entities/user/users';
import { UserNotFoundException } from '../exceptions/user-not-found.exception';
import { Repository } from '../interfaces/repository.interface';

export class DeleteUserUseCase {
  constructor(private readonly usersRepository: Repository<User>) {}

  async execute(id: string) {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new UserNotFoundException(id);
    }

    await this.usersRepository.delete(id);
  }
}

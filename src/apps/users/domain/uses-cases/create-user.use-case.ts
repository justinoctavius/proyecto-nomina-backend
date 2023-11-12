import { CreateUserProps } from '../entities/user/types';
import { Repository } from '../interfaces/repository.interface';
import { User } from '../entities/user/users';

export class CreateUserUseCase {
  constructor(private readonly usersRepository: Repository<User>) {}

  async execute(props: CreateUserProps) {
    const user = await User.create(props);

    await this.usersRepository.save(user);

    return user;
  }
}

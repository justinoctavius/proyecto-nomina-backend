import { Injectable, Inject } from '@nestjs/common';
import { CreateUserProps } from '../entities/user/types';
import { Repository } from '../interfaces/repository.interface';
import { User } from '../entities/user/users';
import { USERS_REPOSITORY } from '../constants/repositories-tokens';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject(USERS_REPOSITORY)
    private readonly usersRepository: Repository<User>,
  ) {}

  async execute(props: CreateUserProps) {
    const user = await User.create(props);

    await this.usersRepository.save(user);

    return user;
  }
}

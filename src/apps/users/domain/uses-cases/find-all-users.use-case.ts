import { Injectable, Inject } from '@nestjs/common';
import { User } from '../entities/user/users';
import { Repository } from '../interfaces/repository.interface';
import {
  FindAllUsersUseCaseResponse,
  findAllUsersUseCaseProps,
} from './interfaces/find-all-user.interface';
import { USERS_REPOSITORY } from '../constants/repositories-tokens';

@Injectable()
export class FindAllUsersUseCase {
  constructor(
    @Inject(USERS_REPOSITORY)
    private readonly usersRepository: Repository<User>,
  ) {}

  async execute({
    limit = 50,
    offset = 0,
  }: findAllUsersUseCaseProps): Promise<FindAllUsersUseCaseResponse> {
    const users = await this.usersRepository.findAll(limit, offset);

    return {
      users,
      pagination: {
        total: users.length,
        limit,
        offset,
      },
    };
  }
}

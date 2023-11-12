import { User } from '../entities/user/users';
import { Repository } from '../interfaces/repository.interface';
import {
  FindAllUsersUseCaseResponse,
  findAllUsersUseCaseProps,
} from './interfaces/find-all-user.interface';

export class FindAllUsersUseCase {
  constructor(private readonly usersRepository: Repository<User>) {}

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

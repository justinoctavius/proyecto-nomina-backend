import { User } from '../entities/user/users';
import { Repository } from 'src/apps/shared/interfaces/repository.interface';

export interface UsersRepository extends Repository<User> {
  findByEmail(email: string): Promise<User | null>;
}

import { User } from '../../entities/user/users';

export interface findAllUsersUseCaseProps {
  limit?: number;
  offset?: number;
}

export interface FindAllUsersUseCaseResponse {
  users: User[];
  pagination: {
    total: number;
    limit: number;
    offset: number;
  };
}

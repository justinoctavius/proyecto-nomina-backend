import { Role } from '../role';

export interface CreateUserProps {
  name: string;
  email: string;
  password: string;
  role: Role;
}

export interface UpdateUserProps {
  name?: string;
  role?: Role;
}

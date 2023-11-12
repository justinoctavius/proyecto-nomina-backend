import { UUIDGenerator } from 'src/apps/shared/utils/uuid';
import { BCrypt } from 'src/apps/shared/utils/bcrypt';
import { Role } from '../role';
import { CreateUserProps, UpdateUserProps } from './types';

export class User {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly email: string,
    readonly password: string,
    readonly role: Role,
  ) {}

  static async create({
    email,
    name,
    password,
    role,
  }: CreateUserProps): Promise<User> {
    const hashedPassword = await BCrypt.hash(password);

    return new User(
      UUIDGenerator.generate(),
      name,
      email,
      hashedPassword,
      role,
    );
  }

  update({ role, name }: UpdateUserProps): User {
    return new User(
      this.id,
      name || this.name,
      this.email,
      this.password,
      role || this.role,
    );
  }
}

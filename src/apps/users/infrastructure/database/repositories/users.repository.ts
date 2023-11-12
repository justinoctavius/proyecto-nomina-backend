import { UsersRepository as IUsersRepository } from './../../../domain/interfaces/users-repository.interface';
import { Injectable } from '@nestjs/common';
import { User } from 'src/apps/users/domain/entities/user/users';

let users: User[] = [];

@Injectable()
export class UsersRepository implements IUsersRepository {
  async findByEmail(email: string): Promise<User> {
    return users.find((user) => user.email === email);
  }

  async save(entity: User): Promise<void> {
    users.push(entity);
  }

  async update(id: string, entity: User): Promise<void> {
    users = users.map((user) => {
      if (user.id === id) {
        return entity;
      }
      return user;
    });
  }

  async delete(id: string): Promise<void> {
    users = users.filter((user) => user.id !== id);
  }

  async findById(id: string): Promise<User> {
    return users.find((user) => user.id === id);
  }

  async findAll(limit?: number, offset?: number): Promise<User[]> {
    return users.slice(offset, limit);
  }
}

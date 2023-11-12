import { Injectable } from '@nestjs/common';
import { User } from 'src/apps/users/domain/entities/user/users';
import { Repository } from 'src/apps/users/domain/interfaces/repository.interface';

@Injectable()
export class UsersRepository implements Repository<User> {
  save(entity: User): Promise<User> {
    throw new Error('Method not implemented.');
  }
  update(id: string, entity: User): Promise<User> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
  findAll(limit?: number, offset?: number): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
  findByProps(props: any): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
}

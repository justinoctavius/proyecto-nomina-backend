import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersRepository as IUsersRepository } from 'src/apps/users/domain/interfaces/users-repository.interface';
import { User } from 'src/apps/users/domain/entities/user/users';
import { UserEntity } from '../entities/user.entity';
import { UserMapper } from '../mappers/user.mapper';

@Injectable()
export class UsersRepository implements IUsersRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
    private readonly userMapper: UserMapper,
  ) {}

  async findByEmail(email: string): Promise<User> {
    const userEntity = await this.usersRepository.findOne({ where: { email } });

    if (!userEntity) return null;

    return this.userMapper.mapToDomain(userEntity);
  }

  async save(entity: User): Promise<void> {
    await this.usersRepository.save(this.userMapper.mapToPersistence(entity));
  }

  async update(id: string, entity: User): Promise<void> {
    await this.usersRepository.update(
      id,
      this.userMapper.mapToPersistence(entity),
    );
  }

  async delete(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async findById(id: string): Promise<User> {
    const userEntity = await this.usersRepository.findOne({ where: { id } });

    if (!userEntity) return null;

    return this.userMapper.mapToDomain(userEntity);
  }

  async findAll(limit?: number, offset?: number): Promise<User[]> {
    const usersEntities = await this.usersRepository.find({
      take: limit,
      skip: offset,
    });
    return usersEntities.map(this.userMapper.mapToDomain);
  }
}

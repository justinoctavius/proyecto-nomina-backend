import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Position } from 'src/apps/employees/domain/entities/position/position';
import { Repository as IRepository } from 'src/apps/shared/interfaces/repository.interface';
import { PositionEntity } from '../entities/position.entity';
import { Repository } from 'typeorm';
import { PositionMapper } from '../mappers/position.mapper';

@Injectable()
export class PositionsRepository implements IRepository<Position> {
  constructor(
    @InjectRepository(PositionEntity)
    private readonly positionsRepository: Repository<PositionEntity>,
  ) {}

  async save(entity: Position): Promise<void> {
    await this.positionsRepository.save(PositionMapper.toPersistence(entity));
  }

  async update(id: string, entity: Position): Promise<void> {
    await this.positionsRepository.update(
      id,
      PositionMapper.toPersistence(entity),
    );
  }

  async delete(id: string): Promise<void> {
    await this.positionsRepository.delete(id);
  }

  async findById(id: string): Promise<Position> {
    const positionEntity = await this.positionsRepository.findOne({
      where: { id },
    });
    return PositionMapper.toDomain(positionEntity);
  }

  async findAll(limit?: number, offset?: number): Promise<Position[]> {
    const positionsEntities = await this.positionsRepository.find({
      take: limit,
      skip: offset,
    });
    return positionsEntities.map(PositionMapper.toDomain);
  }
}

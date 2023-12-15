import { Inject, Injectable } from '@nestjs/common';
import { POSITIONS_REPOSITORY } from '../../constants/repositories-tokens';
import { findAllPositionUseCaseProps } from './interfaces/find-all-position.interface';
import { Repository } from 'src/apps/shared/interfaces/repository.interface';
import { Position } from '../../entities/position/position';

@Injectable()
export class FindAllPositionUseCase {
  constructor(
    @Inject(POSITIONS_REPOSITORY)
    private readonly positionsRepository: Repository<Position>,
  ) {}

  async execute({ limit, offset }: findAllPositionUseCaseProps) {
    return await this.positionsRepository.findAll(limit, offset);
  }
}

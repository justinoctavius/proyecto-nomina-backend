import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'src/apps/shared/interfaces/repository.interface';
import { POSITIONS_REPOSITORY } from '../../constants/repositories-tokens';
import { CreatePositionUseCaseProps } from './interfaces/create-position.interface';
import { Position } from '../../entities/position/position';

@Injectable()
export class CreatePositionUseCases {
  constructor(
    @Inject(POSITIONS_REPOSITORY)
    private readonly positionsRepository: Repository<Position>,
  ) {}

  async execute(props: CreatePositionUseCaseProps) {
    const position = Position.create({ ...props });

    await this.positionsRepository.save(position);
  }
}

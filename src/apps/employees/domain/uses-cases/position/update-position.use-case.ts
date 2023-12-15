import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { UpdatePositionUseCaseProps } from './interfaces/update-position.interface';
import { POSITIONS_REPOSITORY } from '../../constants/repositories-tokens';
import { Repository } from 'src/apps/shared/interfaces/repository.interface';
import { Position } from '../../entities/position/position';

@Injectable()
export class UpdatePositionUseCase {
  constructor(
    @Inject(POSITIONS_REPOSITORY)
    private readonly positionsRepository: Repository<Position>,
  ) {}

  async execute(id: string, props: UpdatePositionUseCaseProps) {
    const position = await this.findPositionById(id);

    const positionUpdated = position.update(props);

    await this.positionsRepository.update(id, positionUpdated);
  }

  private async findPositionById(id: string) {
    const position = await this.positionsRepository.findById(id);

    if (!position) {
      throw new NotFoundException('Position not found');
    }

    return position;
  }
}

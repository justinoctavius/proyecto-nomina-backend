import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { POSITIONS_REPOSITORY } from '../../constants/repositories-tokens';
import { Repository } from 'src/apps/shared/interfaces/repository.interface';
import { Position } from '../../entities/position/position';

@Injectable()
export class DeletePositionUseCase {
  constructor(
    @Inject(POSITIONS_REPOSITORY)
    private readonly positionsRepository: Repository<Position>,
  ) {}

  async execute(id: string) {
    const position = await this.positionsRepository.findById(id);

    if (!position) {
      throw new NotFoundException('Position not found');
    }

    await this.positionsRepository.delete(id);
  }
}

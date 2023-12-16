import { Injectable } from '@nestjs/common';
import { CreatePositionDto } from '../dtos/create-position.dto';
import { UpdatePositionDto } from '../dtos/update-position.dto';
import { FindAllPositionUseCase } from '../../domain/uses-cases/position/find-all-position-use-case';
import { CreatePositionUseCases } from '../../domain/uses-cases/position/create-position.use-case';
import { UpdatePositionUseCase } from '../../domain/uses-cases/position/update-position.use-case';
import { DeletePositionUseCase } from '../../domain/uses-cases/position/delete-position.use-case';

@Injectable()
export class PositionsService {
  constructor(
    private readonly findAllPositionUseCase: FindAllPositionUseCase,
    private readonly createPositionUseCase: CreatePositionUseCases,
    private readonly updatePositionUseCase: UpdatePositionUseCase,
    private readonly deletePositionUseCase: DeletePositionUseCase,
  ) {}

  async findAll(limit?: number, offset?: number) {
    return await this.findAllPositionUseCase.execute({ limit, offset });
  }

  async create(createPositionDto: CreatePositionDto) {
    return await this.createPositionUseCase.execute(createPositionDto);
  }

  async update(id: string, updatePositionDto: UpdatePositionDto) {
    return await this.updatePositionUseCase.execute(id, updatePositionDto);
  }

  async delete(id: string) {
    return await this.deletePositionUseCase.execute(id);
  }
}

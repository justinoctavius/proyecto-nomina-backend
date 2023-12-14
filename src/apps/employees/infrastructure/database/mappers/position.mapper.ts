import { Position } from 'src/apps/employees/domain/entities/position/position';
import { PositionEntity } from '../entities/position.entity';

export class PositionMapper {
  static toDomain({
    id,
    name,
    description,
    salaryPerHour,
  }: PositionEntity): Position {
    return new Position(id, name, description, salaryPerHour);
  }

  static toPersistence({ id, name, description, salaryPerHour }: Position) {
    return {
      id,
      name,
      description,
      salaryPerHour,
    };
  }
}

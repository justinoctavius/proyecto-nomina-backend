import { UUIDGenerator } from 'src/apps/shared/utils/uuid';
import { CreatePositionProps, UpdatePositionProps } from './types';

export class Position {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly salaryPerHour: number,
    readonly description?: string,
  ) {}

  static create({ name, description, salaryPerHour }: CreatePositionProps) {
    const id = UUIDGenerator.generate();
    return new Position(id, name, salaryPerHour, description);
  }

  update({ name, description, salaryPerHour }: UpdatePositionProps) {
    return new Position(
      this.id,
      name || this.name,
      salaryPerHour || this.salaryPerHour,
      description || this.description,
    );
  }
}

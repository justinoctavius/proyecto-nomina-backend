import { UUIDGenerator } from 'src/apps/shared/utils/uuid';
import { CreatePositionProps, UpdatePositionProps } from './types';

export class Position {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly description: string,
    readonly salaryPerHour: number,
  ) {}

  static create({ name, description, salaryPerHour }: CreatePositionProps) {
    const id = UUIDGenerator.generate();
    return new Position(id, name, description, salaryPerHour);
  }

  update({ name, description, salaryPerHour }: UpdatePositionProps) {
    return new Position(
      this.id,
      name || this.name,
      description || this.description,
      salaryPerHour || this.salaryPerHour,
    );
  }
}

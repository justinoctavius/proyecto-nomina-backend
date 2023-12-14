import { UUIDGenerator } from 'src/apps/shared/utils/uuid';
import { CreateDepartmentProps, UpdateDepartmentProps } from './types';

export class Department {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly description: string,
  ) {}

  static async create({
    name,
    description,
  }: CreateDepartmentProps): Promise<Department> {
    const id = UUIDGenerator.generate();
    return new Department(id, name, description);
  }

  update({ name, description }: UpdateDepartmentProps): Department {
    return new Department(
      this.id,
      name || this.name,
      description || this.description,
    );
  }
}

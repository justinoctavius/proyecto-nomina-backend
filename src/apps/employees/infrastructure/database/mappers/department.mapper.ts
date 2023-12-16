import { Department } from 'src/apps/employees/domain/entities/department/department';
import { DepartmentEntity } from '../entities/department.entity';

export class DepartmentMapper {
  static toDomain({ id, description, name }: DepartmentEntity): Department {
    return new Department(id, name, description);
  }

  static toPersistence(department: Department) {
    return {
      id: department.id,
      name: department.name,
      description: department.description,
    };
  }
}

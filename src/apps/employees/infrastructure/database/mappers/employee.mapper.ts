import { Employee } from 'src/apps/employees/domain/entities/employee/employee';
import { EmployeeEntity } from '../entities/employee.entity';
import { DepartmentMapper } from './department.mapper';
import { PositionMapper } from './position.mapper';

export class EmployeeMapper {
  static toDomain({
    id,
    department,
    email,
    firstName,
    lastName,
    nationalId,
    position,
  }: EmployeeEntity): Employee {
    return new Employee(
      id,
      firstName,
      lastName,
      nationalId,
      DepartmentMapper.toDomain(department),
      PositionMapper.toDomain(position),
      email,
    );
  }

  static toPersistence(employee: Employee): EmployeeEntity {
    return {
      id: employee.id,
      firstName: employee.firstName,
      lastName: employee.lastName,
      nationalId: employee.nationalId,
      department: employee.department
        ? DepartmentMapper.toPersistence(employee.department)
        : undefined,
      position: employee?.position
        ? PositionMapper.toPersistence(employee.position)
        : undefined,
      email: employee.email,
    };
  }
}

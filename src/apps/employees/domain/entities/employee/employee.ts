import { UUIDGenerator } from 'src/apps/shared/utils/uuid';
import { CreateEmployeeProps, UpdateEmployeeProps } from './types';
import { Department } from '../department/department';
import { Position } from '../position/position';

export class Employee {
  constructor(
    readonly id: string,
    readonly firstName: string,
    readonly lastName: string,
    readonly nationalId: string,
    readonly department: Department,
    readonly position: Position,
    readonly email: string,
  ) {}

  static create({
    firstName,
    lastName,
    nationalId,
    department,
    position,
    email,
  }: CreateEmployeeProps) {
    const id = UUIDGenerator.generate();
    return new Employee(
      id,
      firstName,
      lastName,
      nationalId,
      department,
      position,
      email,
    );
  }

  update({
    firstName,
    lastName,
    nationalId,
    department,
    position,
    email,
  }: UpdateEmployeeProps) {
    return new Employee(
      this.id,
      firstName || this.firstName,
      lastName || this.lastName,
      nationalId || this.nationalId,
      department || this.department,
      position || this.position,
      email || this.email,
    );
  }
}

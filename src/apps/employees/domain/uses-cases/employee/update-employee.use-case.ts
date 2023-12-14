import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { UpdateEmployeeUseCaseProps } from './interfaces/update-employee.interface';
import {
  DEPARTMENTS_REPOSITORY,
  EMPLOYEES_REPOSITORY,
  POSITIONS_REPOSITORY,
} from '../../constants/repositories-tokens';
import { Repository } from 'src/apps/shared/interfaces/repository.interface';
import { EmployeesRepository } from '../../interfaces/employees-repository.interface';
import { Department } from '../../entities/department/department';
import { Position } from '../../entities/position/position';

@Injectable()
export class UpdateEmployeeUseCase {
  constructor(
    @Inject(EMPLOYEES_REPOSITORY)
    private readonly employeesRepository: EmployeesRepository,
    @Inject(DEPARTMENTS_REPOSITORY)
    private readonly departmentsRepository: Repository<Department>,
    @Inject(POSITIONS_REPOSITORY)
    private readonly positionsRepository: Repository<Position>,
  ) {}

  async execute(id: string, props: UpdateEmployeeUseCaseProps) {
    const { departmentId, positionId } = props;

    const employee = await this.findEmployeeById(id);

    let department = employee.department;
    let position = employee.position;

    if (departmentId) {
      department = await this.findDepartmentById(departmentId);
    }

    if (positionId) {
      position = await this.findPositionById(positionId);
    }

    const updatedEmployee = employee.update({ department, position, ...props });

    await this.employeesRepository.update(employee.id, updatedEmployee);
  }

  private async findEmployeeById(id: string) {
    const employee = await this.employeesRepository.findById(id);

    if (!employee) {
      throw new NotFoundException('Employee not found');
    }

    return employee;
  }

  private async findDepartmentById(id: string) {
    const department = await this.departmentsRepository.findById(id);

    if (!department) {
      throw new NotFoundException('Department not found');
    }

    return department;
  }

  private async findPositionById(id: string) {
    const position = await this.positionsRepository.findById(id);

    if (!position) {
      throw new NotFoundException('Position not found');
    }

    return position;
  }
}

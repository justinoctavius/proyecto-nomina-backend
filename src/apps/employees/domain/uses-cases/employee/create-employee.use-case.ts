import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Repository } from 'src/apps/shared/interfaces/repository.interface';
import {
  EMPLOYEES_REPOSITORY,
  DEPARTMENTS_REPOSITORY,
  POSITIONS_REPOSITORY,
} from '../../constants/repositories-tokens';
import { CreateEmployeeUseCaseProps } from './interfaces/create-employee.interface';
import { Position } from '../../entities/position/position';
import { Department } from '../../entities/department/department';
import { EmployeesRepository } from '../../interfaces/employees-repository.interface';
import { Employee } from '../../entities/employee/employee';

@Injectable()
export class CreateEmployeeUseCases {
  constructor(
    @Inject(EMPLOYEES_REPOSITORY)
    private readonly employeesRepository: EmployeesRepository,
    @Inject(DEPARTMENTS_REPOSITORY)
    private readonly departmentsRepository: Repository<Department>,
    @Inject(POSITIONS_REPOSITORY)
    private readonly positionsRepository: Repository<Position>,
  ) {}

  async execute(props: CreateEmployeeUseCaseProps) {
    const { nationalId, departmentId, positionId } = props;

    await this.validateEmployeeDoesNotExistByEmail(nationalId);

    const department = await this.findDepartmentById(departmentId);
    const position = await this.findPositionById(positionId);

    const employee = Employee.create({ department, position, ...props });

    await this.employeesRepository.save(employee);
  }

  private async validateEmployeeDoesNotExistByEmail(
    nationalId: string,
  ): Promise<void> {
    const employee = await this.employeesRepository.findByNationalId(
      nationalId,
    );

    if (employee) {
      throw new Error('Employee already exists');
    }
  }

  private async findDepartmentById(id: string): Promise<Department> {
    const department = await this.departmentsRepository.findById(id);

    if (!department) {
      throw new NotFoundException('Department not found');
    }

    return department;
  }

  private async findPositionById(id: string): Promise<Position> {
    const position = await this.positionsRepository.findById(id);

    if (!position) {
      throw new NotFoundException('Position not found');
    }

    return position;
  }
}

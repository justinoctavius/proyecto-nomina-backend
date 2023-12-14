import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from 'src/apps/employees/domain/entities/employee/employee';
import { Repository } from 'typeorm';
import { EmployeesRepository as IEmployeesRepository } from './../../../domain/interfaces/employees-repository.interface';
import { EmployeeEntity } from '../entities/employee.entity';
import { EmployeeMapper } from '../mappers/employee.mapper';

export class EmployeesRepository implements IEmployeesRepository {
  constructor(
    @InjectRepository(EmployeeEntity)
    private readonly employeesRepository: Repository<EmployeeEntity>,
  ) {}

  async findByNationalId(nationalId: string) {
    const employee = await this.employeesRepository.findOne({
      where: { nationalId },
    });

    if (!employee) {
      return null;
    }

    return EmployeeMapper.toDomain(employee);
  }

  async save(entity: Employee) {
    const employeeEntity = EmployeeMapper.toPersistence(entity);
    await this.employeesRepository.save(employeeEntity);
  }

  async update(id: string, entity: Employee) {
    const employeeEntity = EmployeeMapper.toPersistence(entity);
    await this.employeesRepository.update(id, employeeEntity);
  }

  async delete(id: string) {
    await this.employeesRepository.delete(id);
  }

  async findById(id: string): Promise<Employee> {
    const employeeEntity = await this.employeesRepository.findOne({
      where: { id },
    });
    return EmployeeMapper.toDomain(employeeEntity);
  }

  async findAll(limit?: number, offset?: number): Promise<Employee[]> {
    const employeesEntities = await this.employeesRepository.find({
      take: limit,
      skip: offset,
    });
    return employeesEntities.map(EmployeeMapper.toDomain);
  }
}

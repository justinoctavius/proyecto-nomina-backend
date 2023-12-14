import { Repository } from 'src/apps/shared/interfaces/repository.interface';
import { Employee } from '../entities/employee/employee';

export interface EmployeesRepository extends Repository<Employee> {
  findByNationalId(nationalId: string): Promise<Employee | null>;
}

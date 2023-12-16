import { Department } from '../department/department';
import { Position } from '../position/position';

export interface CreateEmployeeProps {
  firstName: string;
  lastName: string;
  nationalId: string;
  department: Department;
  position: Position;
  email: string;
}

export interface UpdateEmployeeProps {
  firstName?: string;
  lastName?: string;
  nationalId?: string;
  department?: Department;
  position?: Position;
  email?: string;
}

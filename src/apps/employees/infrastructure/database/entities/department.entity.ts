import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { BaseEntity } from 'src/apps/shared/database/entities/base.entity';
import { EmployeeEntity } from './employee.entity';

@Entity({ name: 'departments' })
export class DepartmentEntity extends BaseEntity {
  @PrimaryColumn({ type: 'uuid', primary: true })
  id: string;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  description?: string;

  @OneToMany(() => EmployeeEntity, (employee) => employee.department)
  employees?: EmployeeEntity[];
}

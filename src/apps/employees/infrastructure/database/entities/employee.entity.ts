import { BaseEntity } from 'src/apps/shared/database/entities/base.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { DepartmentEntity } from './department.entity';
import { PositionEntity } from './position.entity';

@Entity({ name: 'employees' })
export class EmployeeEntity extends BaseEntity {
  @PrimaryColumn({ type: 'uuid', primary: true })
  id: string;

  @Column({ type: 'varchar', length: 50 })
  firstName: string;

  @Column({ type: 'varchar', length: 50 })
  lastName: string;

  @Column({ type: 'varchar', length: 50 })
  nationalId: string;

  @Column({ type: 'varchar', length: 50 })
  email: string;

  @ManyToOne(() => DepartmentEntity, (department) => department.employees, {
    eager: true,
  })
  department?: DepartmentEntity;

  @ManyToOne(() => PositionEntity, (position) => position.employees, {
    eager: true,
  })
  position?: PositionEntity;
}

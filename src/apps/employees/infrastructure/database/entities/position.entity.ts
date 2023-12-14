import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { BaseEntity } from 'src/apps/shared/database/entities/base.entity';
import { EmployeeEntity } from './employee.entity';

@Entity({ name: 'positions' })
export class PositionEntity extends BaseEntity {
  @PrimaryColumn({ type: 'uuid', primary: true })
  id: string;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'varchar', length: 100 })
  description: string;

  @Column({ type: 'decimal' })
  salaryPerHour: number;

  @OneToMany(() => EmployeeEntity, (employee) => employee.position)
  employees?: EmployeeEntity[];
}

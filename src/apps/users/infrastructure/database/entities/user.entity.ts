import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from 'src/apps/shared/database/entities/base.entity';
import { RoleEntity } from './role.entity';

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {
  @PrimaryColumn({ type: 'uuid', primary: true })
  id: string;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'varchar', length: 100 })
  email: string;

  @Column({ type: 'varchar', length: 100 })
  password: string;

  @ManyToOne(() => RoleEntity, (role) => role.users, { eager: true })
  @JoinColumn({ name: 'role_id' })
  role: RoleEntity;
}

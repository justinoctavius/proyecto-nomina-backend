import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { BaseEntity } from 'src/apps/shared/database/entities/base.entity';
import { RolesTypes } from 'src/apps/users/domain/constants/roles-types';
import { UserEntity } from './user.entity';

@Entity({ name: 'roles' })
export class RoleEntity extends BaseEntity {
  @PrimaryColumn({ type: 'uuid', primary: true })
  id: string;

  @Column({ type: 'enum', enum: RolesTypes })
  type: RolesTypes;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  description?: string;

  @OneToMany(() => UserEntity, (user) => user.role)
  users?: UserEntity[];
}

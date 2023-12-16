import { Module } from '@nestjs/common';
import { UserMapper } from './user.mapper';
import { RoleMapper } from './role.mapper';

@Module({
  providers: [UserMapper, RoleMapper],
  exports: [UserMapper, RoleMapper],
})
export class MappersModule {}

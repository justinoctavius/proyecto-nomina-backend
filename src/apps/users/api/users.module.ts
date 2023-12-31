import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { RolesService } from './services/roles.service';

@Module({
  imports: [InfrastructureModule],
  controllers: [UsersController],
  providers: [UsersService, RolesService],
})
export class UsersModule {}

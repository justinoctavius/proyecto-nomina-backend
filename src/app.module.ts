import { Module } from '@nestjs/common';
import { UsersModule } from './apps/users/api/users.module';

@Module({
  imports: [UsersModule],
})
export class AppModule {}

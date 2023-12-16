import { Module } from '@nestjs/common';
import { RepositoriesModule } from './database/repositories/repositories.module';
import { DomainModule } from '../domain/domain.module';

const domainModule = DomainModule.forRoot([RepositoriesModule]);

@Module({
  imports: [RepositoriesModule, domainModule],
  exports: [domainModule],
})
export class InfrastructureModule {}

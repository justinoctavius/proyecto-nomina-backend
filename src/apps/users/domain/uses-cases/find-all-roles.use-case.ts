import { Injectable, Inject } from '@nestjs/common';
import { Role } from '../entities/role';
import { Repository } from '../interfaces/repository.interface';
import { ROLES_REPOSITORY } from '../constants/repositories-tokens';

@Injectable()
export class FindAllRolesUseCase {
  constructor(
    @Inject(ROLES_REPOSITORY)
    private readonly rolesRepository: Repository<Role>,
  ) {}

  async execute(): Promise<Role[]> {
    return await this.rolesRepository.findAll();
  }
}

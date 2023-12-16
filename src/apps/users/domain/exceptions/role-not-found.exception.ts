import { HttpException } from '@nestjs/common';

export class RoleNotFoundException extends HttpException {
  constructor(roleId: string) {
    super(`Role with id ${roleId} not found`, 404);
  }
}

import { HttpException } from '@nestjs/common';

export class UserNotFoundException extends HttpException {
  constructor(userId: string) {
    super(`User with id ${userId} not found`, 404);
  }
}

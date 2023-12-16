import { RolesTypes } from '../constants/roles-types';

export class Role {
  constructor(
    readonly id: string,
    readonly type: RolesTypes,
    readonly name: string,
    readonly description?: string,
  ) {}
}

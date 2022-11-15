import { SetMetadata } from '@nestjs/common';
import Role from '../../enum.roles';

export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);
import { IsString, IsOptional } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployerDto } from './create-employer.dto';

export class UpdateEmployerDto extends PartialType(CreateEmployerDto) {
  @IsOptional()
  @IsString()
  firstName: string;

  @IsOptional()
  @IsString()
  lastName: string;

  @IsOptional()
  @IsString()
  nationalId: string;

  @IsOptional()
  @IsString()
  departmentId: string;

  @IsOptional()
  @IsString()
  positionId: string;

  @IsOptional()
  @IsString()
  email: string;
}

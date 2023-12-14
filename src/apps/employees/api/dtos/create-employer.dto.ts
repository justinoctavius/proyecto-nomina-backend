import { IsString, IsNotEmpty } from 'class-validator';

export class CreateEmployerDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsString()
  nationalId: string;

  @IsNotEmpty()
  @IsString()
  departmentId: string;

  @IsNotEmpty()
  @IsString()
  positionId: string;

  @IsNotEmpty()
  @IsString()
  email: string;
}

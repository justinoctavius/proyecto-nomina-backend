import { IsString, IsNotEmpty, IsOptional, IsInt } from 'class-validator';

export class CreatePositionDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsInt()
  salaryPerHour: number;

  @IsOptional()
  @IsString()
  description?: string;
}

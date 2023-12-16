import {
  Controller,
  Body,
  Param,
  Get,
  Post,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CreateDepartmentDto } from '../dtos/create-department.dto';
import { DepartmentsService } from '../services/departments.service';
import { UpdateDepartmentDto } from '../dtos/update-department.dto';

@Controller('departments')
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) {}

  @Get()
  async findAll() {
    return await this.departmentsService.findAll();
  }

  @Post()
  async create(@Body() createDepartmentDto: CreateDepartmentDto) {
    return await this.departmentsService.create(createDepartmentDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEmployerDto: UpdateDepartmentDto,
  ) {
    return await this.departmentsService.update(id, updateEmployerDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.departmentsService.delete(id);
  }
}

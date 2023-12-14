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
import { EmployeesService } from '../services/employees.service';
import { CreateEmployerDto } from '../dtos/create-employer.dto';
import { UpdateEmployerDto } from '../dtos/update-employer.dto';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get()
  async findAll() {
    return await this.employeesService.findAll();
  }

  @Post()
  async create(@Body() createEmployerDto: CreateEmployerDto) {
    return await this.employeesService.createUser(createEmployerDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEmployerDto: UpdateEmployerDto,
  ) {
    return await this.employeesService.updateUser(id, updateEmployerDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.employeesService.deleteUser(id);
  }
}

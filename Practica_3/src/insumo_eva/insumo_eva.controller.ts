import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InsumoEvaService } from './insumo_eva.service';
import { CreateInsumoEvaluacionDto } from './dto/create-insumo_eva.dto';
import { UpdateInsumoEvaDto } from './dto/update-insumo_eva.dto';

@Controller('insumo-eva')
export class InsumoEvaController {
  constructor(private readonly insumoEvaService: InsumoEvaService) {}

  @Post()
  create(@Body() createInsumoEvaDto: CreateInsumoEvaluacionDto) {
    return this.insumoEvaService.create(createInsumoEvaDto);
  }

  @Get()
  findAll() {
    return this.insumoEvaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.insumoEvaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInsumoEvaDto: UpdateInsumoEvaDto) {
    return this.insumoEvaService.update(id, updateInsumoEvaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.insumoEvaService.remove(id);
  }
}

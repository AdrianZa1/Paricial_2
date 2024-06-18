import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExamenService } from './examen.service';
import { CreateExamenDto } from './dto/create-examen.dto';
import { UpdateExamenDto } from './dto/update-examan.dto';

@Controller('examen')
export class ExamenController {
  constructor(private readonly examenService: ExamenService) {}

  @Post()
  create(@Body() createExamanDto: CreateExamenDto) {
    return this.examenService.create(createExamanDto);
  }

  @Get()
  findAll() {
    return this.examenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.examenService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateExamanDto: UpdateExamenDto) {
    return this.examenService.update(id, updateExamanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.examenService.remove(id);
  }
}

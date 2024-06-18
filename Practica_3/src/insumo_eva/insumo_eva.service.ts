import { Injectable } from '@nestjs/common';
import { CreateInsumoEvaluacionDto } from './dto/create-insumo_eva.dto';
import { UpdateInsumoEvaDto } from './dto/update-insumo_eva.dto';
import { Repository } from 'typeorm';
import { InsumoEvaluacion } from './entities/insumo_eva.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class InsumoEvaService {
  constructor(
    @InjectRepository(InsumoEvaluacion)
    private readonly insumoEvaluacionRepository: Repository<InsumoEvaluacion>
  ) {}

  async create(createInsumoEvaDto: CreateInsumoEvaluacionDto) {
    console.log({
      ...createInsumoEvaDto,
      pregunta: { id: createInsumoEvaDto.preguntaid },
      examen: { id: createInsumoEvaDto.examenid }
    })
    const insumoEva =this.insumoEvaluacionRepository.create({
      ...createInsumoEvaDto,
      pregunta: { id: createInsumoEvaDto.preguntaid },
      examen: { id: createInsumoEvaDto.examenid }
    });
    await this.insumoEvaluacionRepository.save(insumoEva);
    return insumoEva;
}

  async findAll() {
    return this.insumoEvaluacionRepository.find();
  }

  async findOne(id: string) {
    return this.insumoEvaluacionRepository.findOneBy({ id });
  }

  async update(id: string, updateInsumoEvaluacionDto: UpdateInsumoEvaDto) {
    const updated = await this.insumoEvaluacionRepository.update(id, updateInsumoEvaluacionDto);
    return updated.affected > 0 ? this.insumoEvaluacionRepository.findOneBy({ id }) : null;
  }

  async remove(id: string) {
    const insumoEvaluacion = await this.findOne(id);
    insumoEvaluacion.estado = 'Desactivo';
    return this.insumoEvaluacionRepository.save(insumoEvaluacion);
  }
}

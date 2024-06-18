import { Injectable } from '@nestjs/common';
import { CreatePreguntaDto } from './dto/create-pregunta.dto';
import { UpdatePreguntaDto } from './dto/update-pregunta.dto';
import { Repository } from 'typeorm';
import { Pregunta } from './entities/pregunta.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PreguntaService {
  constructor(
    @InjectRepository(Pregunta)
    private readonly preguntaRepository: Repository<Pregunta>
  ) {}

  async create(createPreguntaDto: CreatePreguntaDto) {
    const pregunta = this.preguntaRepository.create(createPreguntaDto);
    return this.preguntaRepository.save(pregunta);
  }

  async findAll() {
    return this.preguntaRepository.find();
  }

  async findOne(id: number ) {
    return this.preguntaRepository.findOneBy({ id });
  }

  async update(id: number, updatePreguntaDto: UpdatePreguntaDto) {
    const updated = await this.preguntaRepository.update(id, updatePreguntaDto);
    return updated.affected > 0 ? this.preguntaRepository.findOneBy({ id }) : null;
  }

  async remove(id: number) {
    const pregunta = await this.findOne(id);
    pregunta.estado = 'Desactivo';
    return this.preguntaRepository.save(pregunta);
  }
}

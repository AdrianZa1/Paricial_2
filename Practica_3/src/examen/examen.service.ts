import { Injectable } from '@nestjs/common';
import { CreateExamenDto } from './dto/create-examen.dto';
import { UpdateExamenDto } from './dto/update-examan.dto';
import { Repository } from 'typeorm';
import { Examen } from './entities/examan.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ExamenService {
  constructor(
    @InjectRepository(Examen)
    private readonly examenRepository: Repository<Examen>
  ) {}

  async create(createExamenDto: CreateExamenDto) {
    const examen = this.examenRepository.create(createExamenDto);
    return this.examenRepository.save(examen);
  }

  async findAll() {
    return this.examenRepository.find();
  }

  async findOne(id: number) {
    return this.examenRepository.findOneBy({ id });
  }

  async update(id: number, updateExamenDto: UpdateExamenDto) {
    const updated = await this.examenRepository.update(id, updateExamenDto);
    return updated.affected > 0 ? this.examenRepository.findOneBy({ id }) : null;
  }

  async remove(id: number) {
    const examen = await this.findOne(id);
    examen.estado = 'Desactivo';
    return this.examenRepository.save(examen);
  }
}

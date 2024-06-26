import { Injectable } from '@nestjs/common';
import { CreateExamenInput } from './dto/create-examen.input';
import { UpdateExamanInput } from './dto/update-examen.input';
import { Examen } from './entities/examan.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ExamenesService {
  constructor(
    @InjectRepository(Examen)
    private readonly examenRepository: Repository<Examen>
  ) {}
  
  async create(createExamenInput: CreateExamenInput): Promise<Examen> {
    const created = this.examenRepository.create(createExamenInput);
    return await this.examenRepository.save(created);
  }

  async findAll(estado: string): Promise<Examen[]> {
    if (estado === 'Activo' || estado === 'Desactivo') {
      return this.examenRepository.find({ where: { estado } });
    }
    return await this.examenRepository.find();
  }
  

  async findOne(id: number): Promise<Examen> {
    return await this.examenRepository.findOne({ where: { id } });
  }

  async update(id: number, updateExamanInput: UpdateExamanInput): Promise<Examen> {
    console.log('ID recibido en el servicio:', id);
    console.log('UpdateExamanInput:', updateExamanInput);
    const updated = await this.examenRepository.preload(updateExamanInput);
    if (!updated) throw new Error(`Examen with id: ${id} not found`);
    return await this.examenRepository.save(updated);
   }

  async remove(id: number) {
    const examen = await this.findOne(id);
    examen.estado = 'Desactivo';
    return this.examenRepository.save(examen); }
}

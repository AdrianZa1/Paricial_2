import { Injectable } from '@nestjs/common';
import { CreateInsumoEvaluacionInput } from './dto/create-insumoevaluacion.input';
import { UpdateInsumoevaluacionInput } from './dto/update-insumoevaluacion.input';
import { Repository } from 'typeorm';
import { InsumoEvaluacion } from './entities/insumoevaluacion.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class InsumoEvaluacionService {
  constructor(
    @InjectRepository(InsumoEvaluacion)
    private readonly insumoEvaluacionRepository: Repository<InsumoEvaluacion>
  ) {}

  async create(createInsumoEvaluacionInput: CreateInsumoEvaluacionInput): Promise<InsumoEvaluacion> {
    const insumoEvaluacion = await this.insumoEvaluacionRepository.create({
      ...createInsumoEvaluacionInput,
      pregunta: { id: createInsumoEvaluacionInput.preguntaId },
      examen: { id: createInsumoEvaluacionInput.examenId }
    });
    const { id } = await this.insumoEvaluacionRepository.save(insumoEvaluacion);
    return await this.findOne(+id);
  }

  async findAll(estado: string): Promise<InsumoEvaluacion[]> {
    if (estado === 'Activo' || estado === 'Desactivo') {
      return this.insumoEvaluacionRepository.find({ where: { estado } });
    }
    return await this.insumoEvaluacionRepository.find();
  }

  async findOne(id: number): Promise<InsumoEvaluacion> {
    return await this.insumoEvaluacionRepository.findOne({ where: { id } });
  }

  async update(id: string, updateRespuestaInput: UpdateInsumoevaluacionInput) {
    const updated =  await this.insumoEvaluacionRepository.preload(updateRespuestaInput);
    return await this.insumoEvaluacionRepository.save(updated);
  }


  async remove(id: number) {
    const insumoEvaluacion = await this.findOne(id);
    insumoEvaluacion.estado = 'Desactivo';
    return this.insumoEvaluacionRepository.save(insumoEvaluacion);
  }
}

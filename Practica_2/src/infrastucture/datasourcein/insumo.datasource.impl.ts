import { prisma } from '../../data/postgres';
import { CreateInsumoDto, InsumoDatasource, InsumoEntity, UpdateInsumoDto } from '../../domain';

export class InsumoDatasourceImpl implements InsumoDatasource {

  async create(createInsumoDto: CreateInsumoDto): Promise<InsumoEntity> {
    const insumoEvaluacion = await prisma.insumoEvaluacion.create({
      data: createInsumoDto!
    });

    return InsumoEntity.fromObject(insumoEvaluacion);
  }

  async getAll(): Promise<InsumoEntity[]> {
    const insumoEvaluacion = await prisma.insumoEvaluacion.findMany();
    return insumoEvaluacion.map(insumoEvaluacion => InsumoEntity.fromObject(insumoEvaluacion));
  }

  async findById(id: number): Promise<InsumoEntity> {
    const insumoEvaluacion = await prisma.insumoEvaluacion.findFirst({
      where: { id }
    });

    if (!insumoEvaluacion) throw `Insumo with id ${id} not found`;
    return InsumoEntity.fromObject(insumoEvaluacion);
  }

  async updateById(updateInsumoDto: UpdateInsumoDto): Promise<InsumoEntity> {
    await this.findById(updateInsumoDto.id);

    const updatedInsumo = await prisma.insumoEvaluacion.update({
      where: { id: updateInsumoDto.id },
      data: updateInsumoDto!.values
    });

    return InsumoEntity.fromObject(updatedInsumo);
  }

  async deleteById(id: number): Promise<InsumoEntity> {
    await this.findById(id);
    const deleted = await prisma.insumoEvaluacion.delete({
      where: { id }
    });

    return InsumoEntity.fromObject(deleted);
  }
}

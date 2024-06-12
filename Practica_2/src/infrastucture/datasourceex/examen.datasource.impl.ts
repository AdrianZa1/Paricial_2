import { prisma } from '../../data/postgres';
import { CreateExamenDto, ExamenDatasource ,  ExamenEntity, UpdateExamenDto } from '../../domain';




export class ExamenDatasourceImpl implements ExamenDatasource {

  async create( createExamenDto: CreateExamenDto ): Promise<ExamenEntity> {
    const examen = await prisma.examen.create({
      data: createExamenDto!
    });

    return ExamenEntity.fromObject( examen );
  }

  async getAll(): Promise<ExamenEntity[]> {
    const examenes = await prisma.examen.findMany();
    return examenes.map( examen => ExamenEntity.fromObject(examen) );
  }

  async findById( id: number ): Promise<ExamenEntity> {
    const examen = await prisma.examen.findFirst({
      where: { id }
    });

    if ( !examen ) throw `Examen with id ${ id } not found`;
    return ExamenEntity.fromObject(examen);
  }

  async updateById( updateExamenDto: UpdateExamenDto ): Promise<ExamenEntity> {
    await this.findById( updateExamenDto.id );
    
    const updatedCiudadano = await prisma.examen.update({
      where: { id: updateExamenDto.id },
      data: updateExamenDto!.values
    });

    return ExamenEntity.fromObject(updatedCiudadano);
  }

  async deleteById( id: number ): Promise<ExamenEntity> {
    await this.findById( id );
    const deleted = await prisma.examen.delete({
      where: { id }
    });

    return ExamenEntity.fromObject( deleted );
  }

}
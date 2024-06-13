import {  CreateExamenDto,
        ExamenDatasource,
        ExamenEntity,
        ExamenRepository,
        UpdateExamenDto } from '../../domain';


export class ExamenRepositoryImpl implements ExamenRepository {

  constructor(
    private readonly datasource: ExamenDatasource,
  ) { }


  create( createExamenDto: CreateExamenDto ): Promise<ExamenEntity> {
    return this.datasource.create( createExamenDto );
  }

  getAll(): Promise<ExamenEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<ExamenEntity> {
    return this.datasource.findById( id );
  }

  updateById( updateExamenDto: UpdateExamenDto ): Promise<ExamenEntity> {
    return this.datasource.updateById( updateExamenDto );
  }

  deleteById( id: number ): Promise<ExamenEntity> {
    return this.datasource.deleteById( id );
  }

}



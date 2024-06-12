import { CreateInsumoDto,
         InsumoDatasource,
        InsumoEntity,
        InsumoRepository,
        UpdateInsumoDto } from '../../domain';


export class InsumoRepositoryImpl implements InsumoRepository {

  constructor(
    private readonly datasource: InsumoDatasource,
  ) { }


  create( createInsumoDto: CreateInsumoDto ): Promise<InsumoEntity> {
    return this.datasource.create( createInsumoDto );
  }

  getAll(): Promise<InsumoEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<InsumoEntity> {
    return this.datasource.findById( id );
  }

  updateById( updateInsumoDto: UpdateInsumoDto ): Promise<InsumoEntity> {
    return this.datasource.updateById( updateInsumoDto );
  }

  deleteById( id: number ): Promise<InsumoEntity> {
    return this.datasource.deleteById( id );
  }

}



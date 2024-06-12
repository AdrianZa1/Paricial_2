import {  UpdateInsumoDto } from '../dtos/Insumo/update-insumo.dto';
import {  CreateInsumoDto,  } from '../dtos/Insumo/Create.insumo.dto';

import { InsumoEntity } from '../entities/insumo.entity';



export abstract class InsumoDatasource {

  abstract create( createTodoDto: CreateInsumoDto ): Promise<InsumoEntity>;
  abstract getAll(): Promise<InsumoEntity[]>;
  abstract findById( id: number ): Promise<InsumoEntity>;
  abstract updateById( updateTodoDto: UpdateInsumoDto ): Promise<InsumoEntity>;
  abstract deleteById( id: number ): Promise<InsumoEntity>;

}
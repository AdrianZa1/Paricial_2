import {   UpdateCocineroDto } from '../dtos/examen/update-examen.dto';
import {  CreateCocineroDto,  } from '../dtos/examen/Create.examen.dto';

import { CocineroEntity } from '../entities/examen.entity';



export abstract class ExamenDatasource {

  abstract create( createTodoDto: CreateExamenDto ): Promise<ExamenEntity>;
  abstract getAll(): Promise<ExamenEntity[]>;
  abstract findById( id: number ): Promise<ExamenEntity>;
  abstract updateById( updateTodoDto: UpdateExamenDto ): Promise<ExamenEntity>;
  abstract deleteById( id: number ): Promise<ExamenEntity>;

}
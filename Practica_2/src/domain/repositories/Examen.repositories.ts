import {   UpdateExamenDto } from '../dtos/examen/update-examen.dto';
import {  CreateExamenDto,  } from '../dtos/examen/Create.examen.dto';

import { ExamenEntity } from '../entities/examen.entity';



export abstract class ExamenRepository  {

  abstract create( createTodoDto: CreateExamenDto ): Promise<ExamenEntity>;
  abstract getAll(): Promise<ExamenEntity[]>;
  abstract findById( id: number ): Promise<ExamenEntity>;
  abstract updateById( updateTodoDto: UpdateExamenDto ): Promise<ExamenEntity>;
  abstract deleteById( id: number ): Promise<ExamenEntity>;

}
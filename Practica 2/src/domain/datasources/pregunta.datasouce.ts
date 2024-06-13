import {  UpdatePreguntaDto } from '../dtos/pregunta/update-pregunta.dto';
import {  CreatePreguntaDto,  } from '../dtos/pregunta/Create.pregunta.dto';

import { PreguntaEntity } from '../entities/pregunta.entity';



export abstract class PreguntaDatasource {

  abstract create( createTodoDto: CreatePreguntaDto ): Promise<PreguntaEntity>;
  abstract getAll(): Promise<PreguntaEntity[]>;
  abstract findById( id: number ): Promise<PreguntaEntity>;
  abstract updateById( updateTodoDto: UpdatePreguntaDto ): Promise<PreguntaEntity>;
  abstract deleteById( id: number ): Promise<PreguntaEntity>;

}
import { Field, ID, InputType } from '@nestjs/graphql';
import { CreatePreguntaInput } from './create-pregunta.input';
import { PartialType } from '@nestjs/mapped-types';
import { IsInt } from 'class-validator';


  @InputType()
  export class UpdatePreguntaInput extends PartialType(CreatePreguntaInput) {
  
    @Field(() => ID)
    @IsInt()
    id: number;
  }
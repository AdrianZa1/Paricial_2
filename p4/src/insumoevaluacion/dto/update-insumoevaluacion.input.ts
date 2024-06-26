import { Field, ID, InputType } from '@nestjs/graphql';
import { CreateInsumoEvaluacionInput } from './create-insumoevaluacion.input';
import { PartialType } from '@nestjs/mapped-types';
import { IsInt } from 'class-validator';


  @InputType()
  export class UpdateInsumoevaluacionInput extends PartialType(CreateInsumoEvaluacionInput) {
  
    @Field(() => ID)
    @IsInt()
    id: number;
    
  }

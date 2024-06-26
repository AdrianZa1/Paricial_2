import { Field, ID, InputType } from '@nestjs/graphql';
import { CreateExamenInput } from './create-examen.input';
import { PartialType } from '@nestjs/mapped-types';
import { IsInt, IsString, IsUUID } from 'class-validator';

@InputType()
export class UpdateExamanInput extends PartialType(CreateExamenInput) {

  @Field(() => ID)
  @IsInt()
  id: number;

}
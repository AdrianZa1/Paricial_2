import { InputType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsString } from 'class-validator';

@InputType()
export class CreateInsumoEvaluacionInput {

  @Field(() => Int)
  @IsInt()
  preguntaId: number;

  @Field(() => Int)
  @IsInt()
  examenId: number;

  @Field(() => Int)
  @IsInt()
  valor: number;

  @Field(() => String)
  @IsString()
  estado: string = "Activo";
}

import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsBoolean } from 'class-validator';

@InputType()
export class CreatePreguntaInput {

  @Field(() => String)
  @IsString()
  pregunta: string;

  @Field(() => String, { nullable: true })
  @IsString()
  categoria?: string;

  @Field(() => Boolean)
  @IsBoolean()
  respuestaCorrecta: boolean;
  
  @Field(() => String)
  @IsString()
  estado: string = "Activo";
}

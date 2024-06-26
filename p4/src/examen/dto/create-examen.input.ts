import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateExamenInput {
  @Field(() => String, { nullable: true })
  @IsString()
  descripcion?: string;

  @Field(() => String)
  @IsString()
  estado: string = "Activo";
}

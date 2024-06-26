import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { InsumoEvaluacion } from 'src/insumoevaluacion/entities/insumoevaluacion.entity';
@ObjectType()
@Entity({ name: 'preguntas' })
export class Pregunta {

  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field(() => String)
  pregunta: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  categoria?: string;

  @Column({ default: false })
  @Field(() => Boolean)
  respuestacorrecta: boolean;

  @Column({ default: 'Activo' })
  @Field(() => String)
  estado: string;

  @OneToMany(
    () => InsumoEvaluacion,
    (insumoEvaluacion) => insumoEvaluacion.pregunta
  )
  @Field(() => [InsumoEvaluacion], { nullable: true })
  insumoEvaluaciones?: InsumoEvaluacion[];
}

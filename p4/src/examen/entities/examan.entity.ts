import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { InsumoEvaluacion } from 'src/insumoevaluacion/entities/insumoevaluacion.entity';

@ObjectType()
@Entity({ name: 'examenes' })
export class Examen {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  descripcion?: string;

  @Column({ default: 'Activo' })
  @Field(() => String)
  estado: string;

  @OneToMany(() => InsumoEvaluacion, (insumoEvaluacion) => insumoEvaluacion.examen)
  @Field(() => [InsumoEvaluacion], { nullable: true })
  insumoEvaluaciones?: InsumoEvaluacion[];
}

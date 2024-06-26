import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Examen } from '../../examen/entities/examan.entity';
import { Pregunta } from '../../pregunta/entities/pregunta.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'insumo_evaluaciones' })
export class InsumoEvaluacion {


    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: number;
  
    @ManyToOne(
      () => Pregunta,
      (pregunta) => pregunta.id,
      { eager: true }
    )
    @Field(() => Pregunta)
    pregunta: Pregunta;
  
    @ManyToOne(
      () => Examen,
      (examen) => examen.id,
      { eager: true }
    )
    @Field(() => Examen)
    examen: Examen;
  
    @Column()
    @Field(() => Int)
    valor: number;
  
    @Column({ default: 'Activo' })
    @Field(() => String)
    estado: string;
  }
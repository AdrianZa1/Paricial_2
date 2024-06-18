import { Examen } from 'src/examen/entities/examan.entity';
import { Pregunta } from 'src/pregunta/entities/pregunta.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity({name: 'insumo_evaluacion'})
export class InsumoEvaluacion {

    @PrimaryGeneratedColumn('uuid')
    @Column({ primary: true, unique: true })
    id: string;

    


    @Column('integer')
    valor: number;

    @Column('text', { default: 'Activo' })
    estado: string;



    @ManyToOne(
        () => Pregunta,
        ( pregunta ) => pregunta.insumos,
        { eager: true }
    )
    pregunta?: Pregunta

    @ManyToOne(
        () => Examen,
        ( examan ) => examan.insumos,
        { eager: true }
    )
    examen?: Examen
}

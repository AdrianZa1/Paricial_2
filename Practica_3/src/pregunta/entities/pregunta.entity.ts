import { InsumoEvaluacion } from 'src/insumo_eva/entities/insumo_eva.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({name: 'pregunta'})
export class Pregunta {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    pregunta: string;

    @Column('text', { nullable: true })
    categoria?: string;

    @Column('boolean', { default: false })
    respuestacorrecta: boolean;

    @Column('text', { default: 'Activo' })
    estado: string;


    @OneToMany(
        () => InsumoEvaluacion,
        ( insumo_eva ) => insumo_eva.pregunta,
        { cascade:true }
    )
    insumos?: InsumoEvaluacion[]

}

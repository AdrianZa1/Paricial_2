import { InsumoEvaluacion } from 'src/insumo_eva/entities/insumo_eva.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({name: 'examen'})
export class Examen {

    @PrimaryGeneratedColumn() 
    
    id: number;

    @Column('text', { nullable: true })
    descripcion: string;

    @Column('text', { default: 'Activo' })
    estado: string;


    @OneToMany(
        () => InsumoEvaluacion,
        ( insumo_eva ) => insumo_eva.examen,
        { cascade:true }
    )
    insumos?: InsumoEvaluacion[]
}

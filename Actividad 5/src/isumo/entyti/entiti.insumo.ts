
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';


@Entity({ name: 'insumo_evaluaciones' })
export class InsumoEvaluacion {


   

        @PrimaryColumn()
        id:number
      
       @Column()
        preguntaId: number;
      
      
        @Column()
        examenId: number;
      
      
        @Column()
        valor: number;
      
      
       
      
  }
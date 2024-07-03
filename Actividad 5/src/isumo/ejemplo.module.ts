import { Module } from '@nestjs/common';
import { EjemploService } from './ejemplo.service';
import { EjemploGateway } from './ejemplo.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InsumoEvaluacion } from './entyti/entiti.insumo';

@Module({
  providers: [EjemploGateway, EjemploService],
  imports: [ TypeOrmModule.forFeature([InsumoEvaluacion]) ],
  exports: [ TypeOrmModule ]
})
export class EjemploModule {}

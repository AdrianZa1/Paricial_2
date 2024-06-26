import { Module } from '@nestjs/common';
import { InsumoEvaluacionService } from './insumoevaluacion.service';
import { InsumoevaluacionResolver } from './insumoevaluacion.resolver';
import { InsumoEvaluacion } from './entities/insumoevaluacion.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [InsumoevaluacionResolver, InsumoEvaluacionService],
  imports: [ TypeOrmModule.forFeature([InsumoEvaluacion]) ],
  exports: [ TypeOrmModule ]
})
export class InsumoevaluacionModule {}

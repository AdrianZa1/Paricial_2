import { Module } from '@nestjs/common';
import { InsumoEvaService } from './insumo_eva.service';
import { InsumoEvaController } from './insumo_eva.controller';
import { InsumoEvaluacion } from './entities/insumo_eva.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [InsumoEvaController],
  providers: [InsumoEvaService],

  imports: [TypeOrmModule.forFeature([InsumoEvaluacion])],
  exports: [TypeOrmModule],

})
export class InsumoEvaModule {}

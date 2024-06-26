import { Module } from '@nestjs/common';
import { PreguntasService } from './pregunta.service';
import { PreguntaResolver } from './pregunta.resolver';
import { Pregunta } from './entities/pregunta.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [PreguntaResolver, PreguntasService],
  imports: [ TypeOrmModule.forFeature([Pregunta]) ],
  exports: [ TypeOrmModule ]
})
export class PreguntaModule {}

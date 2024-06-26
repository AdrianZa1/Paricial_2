import { Module } from '@nestjs/common';
import { ExamenesService } from './examen.service';
import { ExamenResolver } from './examen.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Examen } from './entities/examan.entity';

@Module({
  providers: [ExamenResolver, ExamenesService],
  imports: [ TypeOrmModule.forFeature([Examen]) ],
  exports: [ TypeOrmModule ]
})
export class ExamenModule {}

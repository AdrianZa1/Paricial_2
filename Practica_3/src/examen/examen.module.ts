import { Module } from '@nestjs/common';
import { ExamenService } from './examen.service';
import { ExamenController } from './examen.controller';
import { Examen } from './entities/examan.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ExamenController],
  providers: [ExamenService],

  imports: [TypeOrmModule.forFeature([Examen])],
  exports: [TypeOrmModule],
})
export class ExamenModule {}

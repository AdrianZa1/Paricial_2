import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PreguntaModule } from './pregunta/pregunta.module';
import { ExamenModule } from './examen/examen.module';
import { InsumoEvaModule } from './insumo_eva/insumo_eva.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [PreguntaModule, ExamenModule, InsumoEvaModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'web',
      synchronize: true,
      autoLoadEntities:true
    }),
  ],



  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

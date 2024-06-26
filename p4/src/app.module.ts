import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
//import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

import { join } from 'path';
import { ExamenModule } from './examen/examen.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PreguntaModule } from './pregunta/pregunta.module';
import { InsumoevaluacionModule } from './insumoevaluacion/insumoevaluacion.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      plugins: [
        ApolloServerPluginLandingPageLocalDefault()
      ],
      
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT ,
      username: process.env.DB_USERNAME, 
      password: process.env.DB_PASSWORD ,
      database: process.env.DB_NAME ,
      synchronize: true,
      autoLoadEntities: true
    }),
    ExamenModule,
    PreguntaModule,
    InsumoevaluacionModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

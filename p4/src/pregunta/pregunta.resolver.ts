import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PreguntasService } from './pregunta.service';
import { CreatePreguntaInput } from './dto/create-pregunta.input';
import { UpdatePreguntaInput } from './dto/update-pregunta.input';
import { Pregunta } from './entities/pregunta.entity';

@Resolver(() => Pregunta)
export class PreguntaResolver {
  constructor(private readonly preguntaService: PreguntasService) {}

  @Mutation(() => Pregunta)
  createPregunta(@Args('createPreguntaInput') createPreguntaInput: CreatePreguntaInput):Promise<Pregunta> {
    return this.preguntaService.create(createPreguntaInput);
  }

  @Query(() => [Pregunta], { name: 'preguntas' })
  findAll(
    @Args('estado', { type: () => String,  nullable: true }) estado: string
  ) {
    return this.preguntaService.findAll(estado);
  }


  @Query(() => Pregunta, { name: 'pregunta' })
  findOne(@Args('id') id: number):Promise<Pregunta> {
    return this.preguntaService.findOne(id);
  }

  @Mutation(() => Pregunta)
  updatePregunta(@Args('updatePreguntaInput') updatePreguntaInput: UpdatePreguntaInput):Promise<Pregunta> {
    return this.preguntaService.update(updatePreguntaInput.id, updatePreguntaInput);
  }

  @Mutation(() => Pregunta)
  removePregunta(@Args('id') id: number):Promise<Pregunta> {
    return this.preguntaService.remove(id);
  }
}

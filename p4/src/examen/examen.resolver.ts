import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ExamenesService } from './examen.service';
import { CreateExamenInput } from './dto/create-examen.input';
import { UpdateExamanInput } from './dto/update-examen.input';
import { Examen } from './entities/examan.entity';

@Resolver(() => Examen)
export class ExamenResolver {
  constructor(private readonly examenService: ExamenesService) {}

  @Mutation(() => Examen)
  createexamen(@Args('createExamanInput') createExamanInput: CreateExamenInput): Promise<Examen> {
    return this.examenService.create(createExamanInput);
  }

  @Query(() => [Examen], { name: 'Examenes' })
  findAll(
    @Args('estado', { type: () => String,  nullable: true }) estado: string
  ) {
    return this.examenService.findAll(estado);
  }

  @Query(() => [Examen], { name: 'Examen' })
  findOne(@Args('id') id: number): Promise<Examen>  {
    return this.examenService.findOne(id);
  }

  @Mutation(() => Examen)
  updateexamen(@Args('updateExamanInput') updateExamanInput: UpdateExamanInput): Promise<Examen> {
    console.log('updateExamanInput:', updateExamanInput);
    return this.examenService.update(updateExamanInput.id, updateExamanInput);
  }

  @Mutation(() => Examen)
  removeexamen(@Args('id') id: number): Promise<Examen> {
    return this.examenService.remove(id);
  }
}

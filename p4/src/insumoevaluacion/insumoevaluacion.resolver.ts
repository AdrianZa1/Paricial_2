import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { InsumoEvaluacionService } from './insumoevaluacion.service';
import { CreateInsumoEvaluacionInput } from './dto/create-insumoevaluacion.input';
import { UpdateInsumoevaluacionInput } from './dto/update-insumoevaluacion.input';
import { InsumoEvaluacion } from './entities/insumoevaluacion.entity';


@Resolver(() => InsumoEvaluacion)
export class InsumoevaluacionResolver {
  constructor(private readonly insumoevaluacionService: InsumoEvaluacionService) {}

  @Mutation(() => InsumoEvaluacion)
  createInsumo(@Args('createInsumoevaluacionInput') createInsumoevaluacionInput: CreateInsumoEvaluacionInput) {
    return this.insumoevaluacionService.create(createInsumoevaluacionInput);
  }

  @Query(() => InsumoEvaluacion, { name: 'INSUMOS' })  findAll(
    @Args('estado', { type: () => String,  nullable: true }) estado: string
  ) {
    return this.insumoevaluacionService.findAll(estado);
  }

  @Query(() => InsumoEvaluacion, { name: 'INSUMO' })
  findOne(@Args('id') id: number) {
    return this.insumoevaluacionService.findOne(id);
  }

  @Mutation(() => InsumoEvaluacion)
  updateInsumo(@Args('updateInsumoevaluacionInput') updateInsumoevaluacionInput: UpdateInsumoevaluacionInput) {
    // Convertir el id a string si es necesario
    const idAsString: string = String(updateInsumoevaluacionInput.id);
    return this.insumoevaluacionService.update(idAsString, updateInsumoevaluacionInput);
  }

  @Mutation(() => InsumoEvaluacion)
  removeIsumo(@Args('id') id: number) {
    return this.insumoevaluacionService.remove(id);
  }
}

import { PartialType } from '@nestjs/mapped-types';
import { CreateInsumoEvaluacionDto } from './create-insumo_eva.dto';

export class UpdateInsumoEvaDto extends PartialType(CreateInsumoEvaluacionDto) {}

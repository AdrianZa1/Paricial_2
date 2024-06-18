import { IsOptional, IsString, IsInt, IsNotEmpty } from "class-validator";

export class CreateInsumoEvaluacionDto {

    @IsString()
    @IsOptional()
    id: string;

    @IsInt()
    @IsNotEmpty()
    preguntaid: number;

    @IsInt()
    @IsNotEmpty()
    examenid: number;

    @IsInt()
    @IsNotEmpty()
    valor: number;

    @IsString()
    @IsNotEmpty()
    estado: string = "Activo"; // Valor por defecto
}

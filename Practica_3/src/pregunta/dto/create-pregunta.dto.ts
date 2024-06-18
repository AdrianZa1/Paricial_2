import { IsOptional, IsString, IsBoolean, IsNotEmpty, MinLength } from "class-validator";

export class CreatePreguntaDto {

    @IsString()
    @IsOptional()
    id: number;

    @IsString()
    @MinLength(3)
    @IsNotEmpty()
    pregunta: string;

    @IsString()
    @IsOptional()
    categoria: string;

    @IsBoolean()
    @IsOptional() // Este campo es opcional ya que tiene un valor por defecto en el modelo
    respuestacorrecta: boolean = false;

    @IsString()
    @IsNotEmpty()
    estado: string = "Activo"; // Valor por defecto
}

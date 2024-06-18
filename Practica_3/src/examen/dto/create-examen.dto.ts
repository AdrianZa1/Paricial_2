import { IsOptional, IsString, MinLength, IsNotEmpty } from "class-validator";

export class CreateExamenDto {

    @IsString()
    @IsOptional()
    id: number;

    @IsString()
    @MinLength(3)
    @IsOptional() // Asumiendo que la descripcion puede ser opcional como en la entidad Prisma
    descripcion: string;

    @IsString()
    @IsNotEmpty()
    estado: string = "Activo"; // Valor por defecto
}

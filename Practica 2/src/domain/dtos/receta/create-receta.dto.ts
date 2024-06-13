export class CreateRecetaDto {
    private constructor(
        public readonly nombrePlato: string,
        public readonly ingredientes: string,
    ) {}

    static create(props: { [key: string]: any }): [string?, CreateRecetaDto?] {
        const { nombrePlato, ingredientes } = props;

        if (!nombrePlato) return ['Nombre del plato es requerido', undefined];
        if (!ingredientes) return ['Ingredientes son requeridos', undefined];

        return [undefined, new CreateRecetaDto(nombrePlato, ingredientes)];
    }
}


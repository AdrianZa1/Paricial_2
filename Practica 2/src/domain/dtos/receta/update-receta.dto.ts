export class UpdateRecetaDto {
    private constructor(
        public readonly id: number,
        public readonly nombrePlato?: string,
        public readonly ingredientes?: string,
    ) {}

    static create(props: { [key: string]: any }): [string?, UpdateRecetaDto?] {
        const { id, nombrePlato, ingredientes } = props;

        if (!id) return ['ID de receta es requerido', undefined];

        return [undefined, new UpdateRecetaDto(id, nombrePlato, ingredientes)];
    }
}

export class CreateInsumoDto {
    private constructor(
        public readonly preguntaid: number,
        public readonly examenID: number,
        public readonly valor: number,
        public readonly estado: string = "Activo"
    ) {}

    static create(props: { [key: string]: any }): [string?, CreateInsumoDto?] {
        const { preguntaid, examenID, valor, estado } = props;

        if (!preguntaid) return ['preguntaid property is required', undefined];
        if (!examenID) return ['examenID property is required', undefined];
        if (!valor) return ['valor property is required', undefined];

        let newEstado = estado;
        if (estado) {
            newEstado = estado.toUpperCase();
            if (newEstado !== estado) {
                return ['estado must be uppercase', undefined];
            }
        }

        return [
            undefined,
            new CreateInsumoDto(preguntaid, examenID, valor, newEstado)
        ];
    }
}

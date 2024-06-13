export class UpdateCocineroDto {
    private constructor(
        public readonly id: number,
        public readonly nombre?: string,
        public readonly sueldo_basico?: number,
    ) {}

    static create(props: { [key: string]: any }): [string?, UpdateCocineroDto?] {
        const { id, nombre, sueldo_basico } = props;

        if (!id) return ['ID property is required', undefined];

        return [undefined, new UpdateCocineroDto(id, nombre, sueldo_basico)];
    }
}


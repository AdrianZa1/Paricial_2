export class CreateCocineroDto {
    private constructor(
        public readonly nombre: string,
        public readonly sueldoBasico: number,
    ) {}

    static create(props: { [key: string]: any }): [string?, CreateCocineroDto?] {
        const { nombre, sueldoBasico } = props;

        if (!nombre) return ['Nombre property is required', undefined];
        if (sueldoBasico === undefined) return ['Sueldo basico property is required', undefined];

        return [undefined, new CreateCocineroDto(nombre, sueldoBasico)];
    }
}

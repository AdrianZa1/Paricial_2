export class InsumoEntity {
    constructor(
        public id: number,
        public preguntaid: number,
        public examenID: number,
        public valor: number,
        public estado: string = "Activo"
    ) {}

    public static fromObject(object: { [key: string]: any }): InsumoEntity {
        const { id, preguntaid, examenID, valor, estado } = object;

        if (!id) throw 'Id is required';
        if (!preguntaid) throw 'Preguntaid is required';
        if (!examenID) throw 'ExamenID is required';
        if (!valor) throw 'Valor is required';
        if (!estado) throw 'Estado is required';

        let newEstado = estado;
        if (estado) {
            newEstado = estado.toUpperCase();
            if (newEstado !== estado) {
                throw 'Estado must be uppercase';
            }
        }

        return new InsumoEntity(id, preguntaid, examenID, valor, newEstado);
    }
}

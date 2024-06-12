export class PreguntaEntity {
    constructor(
        public id: number,
        public pregunta: string,
        public categoria?: string,
        public respuestacorrecta: boolean = false,
        public estado: string = "Activo"
    ) {}

    public static fromObject(object: { [key: string]: any }): PreguntaEntity {
        const { id, pregunta, categoria, respuestacorrecta, estado } = object;

        if (!id) throw 'Id is required';
        if (!pregunta) throw 'Pregunta is required';
        if (!estado) throw 'Estado is required';

        let newEstado = estado;
        if (estado) {
            newEstado = estado.toUpperCase();
            if (newEstado !== estado) {
                throw 'Estado must be uppercase';
            }
        }

        return new PreguntaEntity(id, pregunta, categoria, respuestacorrecta, newEstado);
    }
}

export class OpcionEntity {
    // Define the properties and methods for OpcionEntity based on your Prisma schema
    // For simplicity, this example assumes an id and name, adjust as necessary
    constructor(
        public id: number,
        public name: string
    ) {}

    public static fromObject(object: { [key: string]: any }): OpcionEntity {
        const { id, name } = object;

        if (!id) throw 'Id is required';
        if (!name) throw 'Name is required';

        return new OpcionEntity(id, name);
    }
}

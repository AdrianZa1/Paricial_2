export class ExamenEntity {
    constructor(
        public id: number,
        public descripcion?: string,
        public insumoEvaluacion: InsumoEvaluacionEntity[] = [],
        public estado: string = "Activo"
    ) {}

    public static fromObject(object: { [key: string]: any }): ExamenEntity {
        const { id, descripcion, insumoEvaluacion, estado } = object;
        
        if (!id) throw 'Id is required';
        if (!estado) throw 'Estado is required';

        let newEstado = estado;
        if (estado) {
            newEstado = estado.toUpperCase();
            if (newEstado !== estado) {
                throw 'Estado must be uppercase';
            }
        }

        // Assuming InsumoEvaluacionEntity is another entity class
        const insumoEvaluacionEntities = insumoEvaluacion?.map((ie: any) => InsumoEvaluacionEntity.fromObject(ie)) || [];

        return new ExamenEntity(id, descripcion, insumoEvaluacionEntities, newEstado);
    }
}

export class InsumoEvaluacionEntity {
    // Define the properties and methods for InsumoEvaluacionEntity based on your Prisma schema
    // For simplicity, this example assumes an id and name, adjust as necessary
    constructor(
        public id: number,
        public name: string
    ) {}

    public static fromObject(object: { [key: string]: any }): InsumoEvaluacionEntity {
        const { id, name } = object;
        
        if (!id) throw 'Id is required';
        if (!name) throw 'Name is required';

        return new InsumoEvaluacionEntity(id, name);
    }
}

  
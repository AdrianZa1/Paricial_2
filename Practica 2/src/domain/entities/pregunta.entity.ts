export class PreguntaEntity {
    constructor(
        public id: number,
        public pregunta: string,
        public categoria?: string,
        public respuestacorrecta: boolean = false,
        public estado: string = "Activo"
    ) {}

<<<<<<<<<<<<<<  ✨ Codeium Command 🌟 >>>>>>>>>>>>>>>>
+    /**
+     * Factory method to create a PreguntaEntity object from a plain JavaScript object.
+     * Throws an error if any required property is missing or if estado is not uppercase.
+     *
+     * @param {Object} object - The plain JavaScript object to create the entity from.
+     * @param {number} object.id - The ID of the PreguntaEntity.
+     * @param {string} object.pregunta - The question of the PreguntaEntity.
+     * @param {string} [object.categoria] - The category of the PreguntaEntity.
+     * @param {boolean} [object.respuestacorrecta] - The boolean indicating if the PreguntaEntity has a correct answer.
+     * @param {string} object.estado - The state of the PreguntaEntity.
+     * @returns {PreguntaEntity} - The created PreguntaEntity object.
+     * @throws {string} - If any required property is missing or if estado is not uppercase.
+     */
     public static fromObject(object: { [key: string]: any }): PreguntaEntity {
+        // Destructure the object properties
         const { id, pregunta, categoria, respuestacorrecta, estado } = object;
 
+        // Check if the id, pregunta, and estado properties are present
         if (!id) throw 'Id is required';
         if (!pregunta) throw 'Pregunta is required';
         if (!estado) throw 'Estado is required';
 
+        // Convert estado to uppercase and check if it changed
         let newEstado = estado;
         if (estado) {
             newEstado = estado.toUpperCase();
             if (newEstado !== estado) {
                 throw 'Estado must be uppercase';
             }
         }
 
+        // Create and return a new PreguntaEntity object
         return new PreguntaEntity(id, pregunta, categoria, respuestacorrecta, newEstado);
     }
+
<<<<<<<  42669402-d94e-405a-ab1f-72d5c2673f47  >>>>>>> 
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

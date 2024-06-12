export class UpdateInsumoDto {
  private constructor(
      public readonly id: number,
      public readonly preguntaid?: number,
      public readonly examenID?: number,
      public readonly valor?: number,
      public readonly estado?: string
  ) {}

  get values() {
      const returnObj: { [key: string]: any } = {};

      if (this.preguntaid !== undefined) returnObj.preguntaid = this.preguntaid;
      if (this.examenID !== undefined) returnObj.examenID = this.examenID;
      if (this.valor !== undefined) returnObj.valor = this.valor;
      if (this.estado !== undefined) returnObj.estado = this.estado;

      return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateInsumoDto?] {
      const { id, preguntaid, examenID, valor, estado } = props;

      if (!id || isNaN(Number(id))) {
          return ['id must be a valid number', undefined];
      }

      if (estado && estado !== estado.toUpperCase()) {
          return ['estado must be uppercase', undefined];
      }

      return [
          undefined,
          new UpdateInsumoDto(id, preguntaid, examenID, valor, estado)
      ];
  }
}

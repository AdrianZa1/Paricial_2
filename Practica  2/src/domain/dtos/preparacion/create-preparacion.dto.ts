
export class UpdatePreparacionDto {
  private constructor(
      public readonly id: number,
      public readonly cantidadProductos?: number,
      public readonly costo?: number,
      public readonly tiempoEstimado?: string,
      public readonly cocineroId?: number,
      public readonly recetaId?: number,
  ) {}

  static create(props: { [key: string]: any }): [string?, UpdatePreparacionDto?] {
      const { id, cantidadProductos, costo, tiempoEstimado, cocineroId, recetaId } = props;

      if (!id) return ['ID de preparación es requerido', undefined];

      return [undefined, new UpdatePreparacionDto(id, cantidadProductos, costo, tiempoEstimado, cocineroId, recetaId)];
  }
}

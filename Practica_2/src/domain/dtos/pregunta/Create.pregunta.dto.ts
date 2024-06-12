
export class CreatePreguntaDto {
  private constructor(
      public readonly pregunta: string,
      public readonly categoria?: string,
      public readonly respuestacorrecta: boolean = false,
      public readonly estado: string = "Activo"
  ) {}

  static create(props: { [key: string]: any }): [string?, CreatePreguntaDto?] {
      const { pregunta, categoria, respuestacorrecta, estado } = props;

      if (!pregunta) return ['pregunta property is required', undefined];

      return [
          undefined,
          new CreatePreguntaDto(
              pregunta,
              categoria,
              respuestacorrecta !== undefined ? respuestacorrecta : false,
              estado !== undefined ? estado : "Activo"
          )
      ];
  }
}


export class UpdatePreguntaDto {

  private constructor(
    public readonly id: number,
    public readonly pregunta?: string,
    public readonly categoria?: string,
    public readonly respuestacorrecta?: boolean,
    public readonly estado?: string
  ) {}

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.pregunta) returnObj.pregunta = this.pregunta;
    if (this.categoria) returnObj.categoria = this.categoria;
    if (this.respuestacorrecta !== undefined) returnObj.respuestacorrecta = this.respuestacorrecta;
    if (this.estado) returnObj.estado = this.estado;

    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdatePreguntaDto?] {
    const { id, pregunta, categoria, respuestacorrecta, estado } = props;

    if (!id || isNaN(Number(id))) {
      return ['id must be a valid number'];
    }

    if (estado && estado !== estado.toUpperCase()) {
      return ['estado must be uppercase'];
    }

    return [
      undefined,
      new UpdatePreguntaDto(
        id,
        pregunta,
        categoria,
        respuestacorrecta,
        estado
      )
    ];
  }
}

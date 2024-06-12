

export class UpdateExamenDto {

  private constructor(
    public readonly id: number,
    public readonly examen?: string,
  ){}

  get values() {
    const returnObj: {[key: string]: any} = {};

    if ( this.examen ) returnObj.examen = this.examen;

    return returnObj;
  }


  static create( props: {[key:string]: any} ): [string?, UpdateExamenDto?]  {

    const { id,  examen } = props;
    let newExamen =examen;

    if ( !id || isNaN( examen(id)) ) {
      return ['id must be a valid number'];
    }

    if ( examen ) {
      newExamen =  examen.toUpperCase();
      if ( newExamen !== examen ) {
        return ['examen must be uppercase'];
      }
    }

    return [undefined, new UpdateExamenDto(id, examen)];
  }


}
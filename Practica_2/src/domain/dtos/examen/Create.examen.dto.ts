

export class CreateExamenDto {

    private constructor(
      public readonly descricion: string,
    ){}
  
  
    static create( props: {[key:string]: any} ): [string?, CreateExamenDto?]  {
  
      const { descricion } = props;
  
      if ( !descricion ) return ['descricion property is required', undefined];
  
  
      return [undefined, new CreateExamenDto(descricion)];
    }
  
  
  }
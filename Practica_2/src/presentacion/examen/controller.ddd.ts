import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateExamenDto, UpdateExamenDto } from '../../domain/dtos';
import { ExamenRepository } from '../../domain';


export class ExamenesController {

  //* Dependency Injection
  constructor(
    private readonly ExamenRepository: ExamenRepository,
  ) { }


  public getExamen = async ( req: Request, res: Response ) => {
    const examen = await this.ExamenRepository.getAll();
    return res.json( examen );
  };

  public getExamenById = async ( req: Request, res: Response ) => {
    const id = +req.params.id;

    try {
      const examen = await this.ExamenRepository.findById( id );
      res.json( examen );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createExamen = async ( req: Request, res: Response ) => {
    const [ error, createExamenDto ] = CreateExamenDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const todo = await this.ExamenRepository.create( createExamenDto! );
    res.json( todo );

  };

  public updateExamen = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateExamenDto ] = UpdateExamenDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedExamen = await this.ExamenRepository.updateById( updateExamenDto! );
    return res.json( updatedExamen );

  };


  public deleteTodo = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const deletedTodo = await this.ExamenRepository.deleteById( id );
    res.json( deletedTodo );

  };



}
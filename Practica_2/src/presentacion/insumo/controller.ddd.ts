import { Request, Response } from 'express';
import { CreateInsumoDto, UpdateInsumoDto } from '../../domain/dtos';
import { InsumoRepository } from '../../domain';

export class InsumosController {

  constructor(
    private readonly insumoRepository: InsumoRepository,
  ) { }

  public getInsumos = async (req: Request, res: Response) => {
    const insumos = await this.insumoRepository.getAll();
    return res.json(insumos);
  };

  public getInsumoById = async (req: Request, res: Response) => {
    const id = +req.params.id;

    try {
      const insumo = await this.insumoRepository.findById(id);
      res.json(insumo);
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  public createInsumo = async (req: Request, res: Response) => {
    const [error, createInsumoDto] = CreateInsumoDto.create(req.body);
    if (error) return res.status(400).json({ error });

    const insumo = await this.insumoRepository.create(createInsumoDto!);
    res.json(insumo);
  };

  public updateInsumo = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateInsumoDto] = UpdateInsumoDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const updatedInsumo = await this.insumoRepository.updateById(updateInsumoDto!);
    return res.json(updatedInsumo);
  };

  public deleteInsumo = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const deletedInsumo = await this.insumoRepository.deleteById(id);
    res.json(deletedInsumo);
  };
}

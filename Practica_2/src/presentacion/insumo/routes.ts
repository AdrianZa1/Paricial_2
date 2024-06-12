import { Router } from 'express';
import { InsumosController } from './controller.ddd';
import { InsumoDatasourceImpl } from '../../infrastucture/datasourcein/insumo.datasource.impl';
import { InsumoRepositoryImpl } from '../../infrastucture/repositories/insumo.repository.impl';


export class InsumoRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new InsumoDatasourceImpl();
    
    const insumoRepository = new InsumoRepositoryImpl(datasource);
    const insumoController = new InsumosController(insumoRepository);

    router.get('/', insumoController.getInsumos);
    router.get('/:id', insumoController.getInsumoById);
    
    router.post('/', insumoController.createInsumo);
    router.put('/:id', insumoController.updateInsumo);
    router.delete('/:id', insumoController.deleteInsumo);


    return router;
  }


}

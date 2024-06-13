import { Router } from 'express';
import { ExamenesController } from './controller.ddd';
import { ExamenDatasourceImpl } from '../../infrastucture/datasourceex/examen.datasource.impl';
import { ExamenRepositoryImpl } from '../../infrastucture/repositories/examen.repository.impl';


export class ExamenRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new ExamenDatasourceImpl();
    
    const examenRepository = new ExamenRepositoryImpl( datasource );
    const examenController = new ExamenesController(examenRepository);

    router.get('/', examenController.getExamen );
    router.get('/:id', examenController.getExamenById );
    
    router.post('/', examenController.createExamen );
    router.put('/:id', examenController.updateExamen );
    router.delete('/:id', examenController.deleteTodo );


    return router;
  }


}


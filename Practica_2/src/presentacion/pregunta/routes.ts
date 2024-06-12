import { Router } from 'express';
import { PreguntasController } from './controller.ddd';
import { PreguntaDatasourceImpl } from '../../infrastucture/datasourcepre/pregunta.datasource.impl';
import { PreguntaRepositoryImpl } from '../../infrastucture/repositories/pregunta.repository.impl';


export class PreguntaRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new PreguntaDatasourceImpl();
    
    const preguntaRepository = new PreguntaRepositoryImpl(datasource);
    const preguntaController = new PreguntasController(preguntaRepository);

    router.get('/', preguntaController.getPreguntas);
    router.get('/:id', preguntaController.getPreguntaById);
    
    router.post('/', preguntaController.createPregunta);
    router.put('/:id', preguntaController.updatePregunta);
    router.delete('/:id', preguntaController.deletePregunta);


    return router;
  }


}

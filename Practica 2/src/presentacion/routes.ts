import { Router } from 'express';

import { ExamenRoutes } from './examen/routes';
import { PreguntaRoutes } from './pregunta/routes';
import { InsumoRoutes } from './insumo/routes';
import { GithubRoutes } from "./github/github.routes";


export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/examen', ExamenRoutes.routes );
    router.use('/pregunta', PreguntaRoutes.routes );
    router.use('/insumo', InsumoRoutes.routes );



    router.use('/github', GithubRoutes.routes );
    
    return router;
  }


}


import { Router } from 'express';
import UserController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// nao deveria existir
// router.get('/:id', UserController.show); // lista usuarios
// router.get('/', UserController.index); // lista usuario

router.post('/', UserController.store);
router.put('/', loginRequired, UserController.update);
router.delete('/', loginRequired, UserController.delete);

export default router;

/*
index -> lista todos os usuarios -> GET
store/create -> cria um novo usuario -> POST
delete -> apaga um usuario -> DELETE
show -> mostra um usuario -> GET
update -> atuakuza um usuario -> PATCH ou PUT
*/

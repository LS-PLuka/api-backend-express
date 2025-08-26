import express from 'express';

// Importando Controllers
import { createUserController } from '../controllers/user/createUserController'
import { getByIdUserController } from '../controllers/user/getByIdUserController'
import { editUserController } from '../controllers/user/editUserController';
import { deleteUserController } from '../controllers/user/deleteUserController';
import { listUserController } from '../controllers/user/listUserController';

// Criando os Routers
const router = express.Router();

router.post('/', createUserController)
router.get('/:id', getByIdUserController)
router.put('/:id', editUserController)
router.delete('/:id', deleteUserController)
router.get('/', listUserController)

// Exportando o Router
export default router;

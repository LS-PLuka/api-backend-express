import express from 'express';

// Importando Controllers
import { createUserController } from '../controllers/user/createUserController.js'
import { getByIdUserController } from '../controllers/user/getByIdUserController.js'
import { editUserController } from '../controllers/user/editUserController.js';
import { deleteUserController } from '../controllers/user/deleteUserController.js';
import { listUserController } from '../controllers/user/listUserController.js';

// Criando os Routers
const router = express.Router();

router.post('/', createUserController)
router.get('/:id', getByIdUserController)
router.put('/:id', editUserController)
router.delete('/:id', deleteUserController)
router.get('/', listUserController)

// Exportando o Router
export default router;

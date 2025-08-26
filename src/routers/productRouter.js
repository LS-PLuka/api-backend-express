import express from 'express';

// Importando Controllers
import { createProductController } from '../controllers/product/createProductController';
import { getByIdProductController } from '../controllers/product/getByIdProductController';
import { listProductController } from '../controllers/product/listProductController';
import { editProductController } from '../controllers/product/editProductController'
import { deleteProductController } from '../controllers/product/deleteProductController'

// Criando os Routers
const router = express.Router();

router.post('/', createProductController)
router.get('/:id', getByIdProductController)
router.put('/:id', editProductController)
router.delete('/:id', deleteProductController)
router.get('/', listProductController)

// Exportando o Router
export default router;

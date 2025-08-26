import express from 'express';

// Importando Controllers
import { createProductController } from '../controllers/product/createProductController.js';
import { getByIdProductController } from '../controllers/product/getByIdProductController.js';
import { listProductController } from '../controllers/product/listProductController.js';
import { editProductController } from '../controllers/product/editProductController.js'
import { deleteProductController } from '../controllers/product/deleteProductController.js'

// Criando os Routers
const router = express.Router();

router.post('/', createProductController)
router.get('/:id', getByIdProductController)
router.put('/:id', editProductController)
router.delete('/:id', deleteProductController)
router.get('/', listProductController)

// Exportando o Router
export default router;

import express from 'express';

// Importando Controllers
import { createSupplierController } from '../controllers/supplier/createSupplierController.js';
import { getByIdSupplierController } from '../controllers/supplier/getByIdSupplierController.js';
import { editSupplierController } from '../controllers/supplier/editSupplierController.js';
import { deleteSupplierController } from '../controllers/supplier/deleteSupplierController.js';
import { listSupplierController } from '../controllers/supplier/listSupplierController.js';

// Criando os Routers
const router = express.Router();

router.post('/', createSupplierController)
router.get('/:id', getByIdSupplierController)
router.put('/:id', editSupplierController)
router.delete('/:id', deleteSupplierController)
router.get('/', listSupplierController)

// Exportando o Router
export default router;

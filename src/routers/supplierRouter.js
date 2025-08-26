import express from 'express';

// Importando Controllers
import { createSupplierController } from '../controllers/supplier/createSupplierController';
import { getByIdSupplierController } from '../controllers/supplier/getByIdSupplierController';
import { editSupplierController } from '../controllers/supplier/editSupplierController';
import { deleteSupplierController } from '../controllers/supplier/deleteSupplierController';
import { listSupplierController } from '../controllers/supplier/listSupplierController';

// Criando os Routers
const router = express.Router();

router.post('/', createSupplierController)
router.get('/:id', getByIdSupplierController)
router.put('/:id', editSupplierController)
router.delete('/:id', deleteSupplierController)
router.get('/', listSupplierController)

// Exportando o Router
export default router;

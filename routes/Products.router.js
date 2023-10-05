import Router from 'express'
import ProductsController from '../controllers/Products.controller.js'

const router = new Router();

router.get('/:id', ProductsController.getOne);
router.get('/', ProductsController.getAll);
router.patch('/:id', ProductsController.edit);
router.post('/', ProductsController.create);
router.delete('/:id', ProductsController.delete);

export default router;
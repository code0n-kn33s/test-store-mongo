import Router from 'express';
import OrdersController from '../controllers/Orders.controller.js';

const router = new Router();

router.get('/:id', OrdersController.getOne);
router.get('/', OrdersController.getAll);
router.patch('/:id', OrdersController.edit);
router.post('/', OrdersController.create);
router.delete('/:id', OrdersController.delete);

export default router;
import Router from 'express';
const router = new Router();

import ProductsRouter  from './Products.router.js'
import OrdersRouter from './Orders.router.js'
import ProfilesRouter from './Profiles.router.js'

router.use('/products/', ProductsRouter);
router.use('/orders/', OrdersRouter);
router.use('/profiles/', ProfilesRouter);

export default router;
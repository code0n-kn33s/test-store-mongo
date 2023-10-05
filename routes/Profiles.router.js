import Router from 'express';
import ProfilesController from '../controllers/Profiles.controller.js';

const router = new Router();

router.get('/:id', ProfilesController.getOne);
router.get('/', ProfilesController.getAll);
router.patch('/:id', ProfilesController.edit);
router.post('/', ProfilesController.create);
router.delete('/:id', ProfilesController.delete);

export default router;
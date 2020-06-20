import { Router } from 'express';
import { UserController } from '../controllers';

const router = Router();

const userController = new UserController();

router.get('/', userController.index);
// router.put('/:id', ExampleController.update);
// router.delete('/:id', ExampleController.del);
// router.post('/', ExampleController.create); 

export default router;

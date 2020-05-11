import { Router } from 'express';
import { UserController } from '../controllers';

const router = Router();

router.get('/', UserController.index);
// router.put('/:id', ExampleController.update);
// router.delete('/:id', ExampleController.del);
// router.post('/', ExampleController.create); 

export default router;

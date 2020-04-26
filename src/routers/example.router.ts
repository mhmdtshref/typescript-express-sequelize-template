import { Router } from 'express';
import { ExampleController } from '../controllers';

const router = Router();

router.get('/', ExampleController.index);
// router.put('/:id', ExampleController.update);
// router.delete('/:id', ExampleController.del);
// router.post('/', ExampleController.create); 

export default router;
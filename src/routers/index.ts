import router, { Request, Response, NextFunction } from 'express';

import UserRouter from './user.router';

const apiRouter = router();

apiRouter.use('/users', UserRouter);

apiRouter.all('*', (request: Request, response: Response, errorHandler: NextFunction) => {
    errorHandler(new Error('Page not found'));
});

export default apiRouter;
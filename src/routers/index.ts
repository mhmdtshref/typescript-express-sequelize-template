import router, { Request, Response } from 'express';

import ExampleRouter from './example.router';

const apiRouter = router();

apiRouter.use('/examples', ExampleRouter);

apiRouter.all('*', (request: Request, response: Response) => {
    return response.status(404).json({
        success: false,
        error: 'Page Not Found',
    });
});

export default apiRouter;
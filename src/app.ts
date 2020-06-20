import express, { Request, Response, NextFunction } from 'express'
import apiRouter from './routers';


export class ExpressApp {

    app = express();

    constructor() {
        this.setAppSettings();
        this.setAppRouter();
    }

    setAppSettings = (): void => {
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
    }

    setAppRouter = (): void => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this.app.use('/api', apiRouter, (error: Error, request: Request, response: Response, next: NextFunction) => {
            response.status(400).json({
                success: false,
                error: error.message,
            });
        });
    }
}

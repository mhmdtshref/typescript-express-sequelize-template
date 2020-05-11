import express, { Request, Response, NextFunction } from 'express'
import apiRouter from './routers';

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', apiRouter, (error: Error, request: Request, response: Response, next: NextFunction) => {
    response.status(400).json({
        success: false,
        error: error.message,
    });
});

export default app

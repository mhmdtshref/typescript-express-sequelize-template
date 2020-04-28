import { NextFunction } from "express";

export const exampleMiddlewareFn = (request: Request, response: Response, next: NextFunction) => {
    // Do some checks and return error if the check fails,
    // Or call next function to pass this middleware.
    next();
}

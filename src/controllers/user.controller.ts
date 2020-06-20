import { Request, Response, NextFunction } from 'express';
import { UserService } from '../services';
import Boom from '@hapi/boom';

export class UserController {

    private userService = new UserService();

    index = (request: Request, response: Response, errorHandler: NextFunction): void => {
        // Get request query
        // const query = request.query;
    
        // Get request query
        // const body = request.body;
    
        // Get request params
        // const params = request.params;
    
        this.userService.index().then((users) => {
            // To send response
            response.status(200).json({
                success: true,
                body: {
                    users,
                },
            });
        }).catch((error: Error) => {
            errorHandler(Boom.badRequest(error.message));
        });
    }
}
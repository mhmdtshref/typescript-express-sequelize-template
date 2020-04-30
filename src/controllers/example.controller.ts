 
 
 import { Request, Response } from 'express';
 
 export const index = (request: Request, response: Response): void => {
      // Get request query
    const query = request.query;

    // Get request query
    const body = request.body;

    // Get request params
    const params = request.params;

    // To send response
    response.status(200).json({
        success: true,
        body: {
            query,
            body,
            params,
        }
    })
}
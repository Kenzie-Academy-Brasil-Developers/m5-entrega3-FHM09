import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { AppError } from '../errors/app.errors';


export class HandleErrors {
   static execute (error: Error, req: Request, res: Response, next: NextFunction) {
      if (error instanceof AppError) {
         return res.status(error.statusCode).json({ message: error.message });
      }
      if (error instanceof ZodError) {
         return res.status(400).json({ message: error.errors });
      }

      return res.status(500).json({ message: 'Internal Server Error' });
   }
}

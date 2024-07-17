import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';

export class BodyValidator {
   static execute = (schema: AnyZodObject) => (req: Request, _: Response, next: NextFunction) => {
      req.body = schema.parse(req.body);
      return next();
   };
}
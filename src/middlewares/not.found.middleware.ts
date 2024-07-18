import { NextFunction, Request, Response } from 'express';
import { prisma } from '../database/prisma';

export class NotFound {
   static execute = async (req: Request, res: Response, next: NextFunction) => {
      
      const car = req.params.id;
      const search = await prisma.car.findFirst({ where: { id: car } });
      
      if (!search) {
         return res.status(404).json({ message: 'Car not found' });
      }

      next();
   };
}
import { Request, Response } from 'express';
import { CarService } from '../services/car.service';
import { inject, injectable } from 'tsyringe';

@injectable()
export class CarController {
   constructor (@inject('CarService') private carService: CarService) {}

   create = async (req: Request, res: Response): Promise<Response> => {
      const car = await this.carService.create(req.body);
      return res.status(201).json(car);
   };

   findOne = async (req: Request, res: Response): Promise<Response> => {
      const car = await this.carService.findOne(req.params.id);
      return res.status(200).json(car);
   };

   findMany = async (req: Request, res: Response): Promise<Response> => {
      const car = await this.carService.findMany();
      return res.status(200).json(car);
   };

   update = async (req: Request, res: Response): Promise<Response> => {
      const car = await this.carService.update(req.body, req.params.id);
      return res.status(200).json(car);
   };

   delete = async (req: Request, res: Response): Promise<Response> => {
      const car = await this.carService.delete(req.params.id);
      return res.status(204).json(car);
   };
}
import { Router } from 'express';
import { container } from 'tsyringe';
import { CarController } from '../controllers/car.controller';
import { NotFound } from '../middlewares/not.found.middleware';
import { BodyValidator } from '../middlewares/body.validator.middleware';
import { carCreateSchema, carUpdateSchema } from '../schemas/car.schema';
import { CarService } from '../services/car.service';



export const carRouter = Router();

container.registerSingleton('CarService', CarService);

const carController = container.resolve(CarController);

carRouter.post('/', BodyValidator.execute(carCreateSchema), (req, res) => {
   carController.create(req, res);
});
carRouter.get('/', (req, res) => {
   carController.findMany(req, res);
});
carRouter.get('/:id', NotFound.execute, (req, res) => {
   carController.findOne(req, res);
});
carRouter.patch('/:id',
   BodyValidator.execute(carUpdateSchema),
   NotFound.execute,
   (req, res) => {
      carController.update(req, res);
   }
);
carRouter.delete('/:id', NotFound.execute, (req, res) => {
   carController.delete(req, res);
});
import { injectable } from 'tsyringe';
import { prisma } from '../database/prisma';
import { carSchema } from '../schemas/car.schema';
import { TCarCreate, TCar } from '../interfaces/car.interface';


@injectable()
export class CarService {
   create = async (data: TCarCreate): Promise<TCarCreate> => {
      const car = await prisma.car.create({
         data
      });
      return carSchema.parse(car);
   };

   findOne = async (id: string): Promise<TCar | null> => {
      const car = await prisma.car.findUnique({
         where: { id }
      });
      return car;
   };

   findMany = async (): Promise<TCar[] | null> => {
      const car = await prisma.car.findMany();
      return car;
   };

   update = async (data: TCarCreate, id: string): Promise<Partial<TCarCreate>> => {
      const car = await prisma.car.update({
         where: { id },
         data
      });
      return car;
   };

   delete = async (id: string) => {
      const car = await prisma.car.delete({
         where: { id }
      });
   };
}
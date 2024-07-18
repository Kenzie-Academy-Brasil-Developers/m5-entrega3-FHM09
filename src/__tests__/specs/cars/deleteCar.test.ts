import { container } from 'tsyringe';
import { CarService } from '../../../services/car.service';
import { mock_createCar } from '../../mocks/car.mock';
import { prismaMock } from '../../mocks/prisma';
import { request } from '../../setupFiles';


describe('Unit test: delete car', () => {
   it('should be able to delete a car successfully', async () => {
      const carService = container.resolve(CarService);

      prismaMock.car.delete.mockResolvedValue(mock_createCar);

      const data = await carService.delete(mock_createCar.id);

      expect(data).toBeUndefined();
   });

   it("should throw error when try to delete a invalid car", async () => {
      const car = await prismaMock.car.findFirst();

      const id = (car?.id as string) + 1;

      await request.delete(`/cars/${id}`).expect(404);
  })
});

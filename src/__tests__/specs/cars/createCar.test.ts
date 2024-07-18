import { container } from 'tsyringe';
import { CarService } from '../../../services/car.service';
import { mock_createCar, mock_createCarBody, mock_createCarReturn, mock_invalidCarData } from '../../mocks/car.mock';
import { prismaMock } from '../../mocks/prisma';
import { request } from '../../setupFiles';


describe('Integrations test: create car', () => {
   it('should be able to create a car successfully', async () => {
      const carService = container.resolve(CarService);

      prismaMock.car.create.mockResolvedValue(mock_createCar);

      const data = await carService.create(mock_createCarBody);

      expect(data).toStrictEqual(mock_createCarReturn);
   });

   it("should throw error when try to create a car with a invalid body parameter", async () => {
      await request.post("/cars").send(mock_invalidCarData).expect(400);
   });
});
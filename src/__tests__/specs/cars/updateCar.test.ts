import { container } from 'tsyringe';
import { CarService } from '../../../services/car.service';
import { mock_createCar, mock_invalidCarData, mock_updateCar, mock_updateCarBody } from '../../mocks/car.mock';
import { prismaMock } from '../../mocks/prisma';
import { request } from '../../setupFiles';
import { mockReset } from 'jest-mock-extended';


describe('Integrations test: update car', () => {

   beforeEach(() => {
      prismaMock.car.findUnique.mockResolvedValue(mock_createCar);
    });

    afterEach(() => {
      mockReset(prismaMock); 
   });

   it('should be able to update car with sucess', async () => {
      const carService = container.resolve(CarService);

      const car = mock_updateCar;

      prismaMock.car.update.mockResolvedValue(car);

      const data = await carService.update(mock_updateCarBody, car.id);

      expect(data).toStrictEqual(mock_updateCar);
   });

   it("should return an error getting a car with non existing id", async () => {
      const response = await request.patch("/cars/99999");
   
      const expectedBody = {
        message: "Car not found",
      };
   
      expect(response.body).toEqual(expectedBody);
      expect(response.statusCode).toBe(404);
    });

    it('deve retornar status 400 e mensagem de erro para dados inválidos', async () => {
      const response = await request.patch(`/cars/${mock_createCar.id}`).send(mock_invalidCarData);
  
      expect(response.status).toBe(400);

      expect(response.body.errors).toHaveLength(5);

      expect(response.body.errors).toEqual([
        { code: 'invalid_type', expected: 'string', received: 'number', path: ['name'], message: 'Expected string, received number' },
      ]);
    });
});


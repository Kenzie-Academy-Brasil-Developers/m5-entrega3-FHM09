import supertest from 'supertest';
import 'reflect-metadata';
import { app } from '../app';
import { prisma } from '../database/prisma';


export const request = supertest(app);


beforeEach(async () => {
   await prisma.$transaction([ prisma.car.deleteMany() ]);
});

import 'reflect-metadata';
import express, { json } from 'express';
import helmet from 'helmet';
import { carRouter } from './routes/car.router';
import { HandleErrors } from './middlewares/handle.errors.middleware';


export const app = express();

app.use(helmet());

app.use(json());

app.use('/cars', carRouter);

app.use(HandleErrors.execute);

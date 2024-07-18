import { z } from 'zod';
import { carSchema, carCreateSchema, carUpdateSchema } from '../schemas/car.schema';

export type TCar = z.infer<typeof carSchema>;
export type TCarCreate = z.infer<typeof carCreateSchema>;
export type TCarUpdate = z.infer<typeof carUpdateSchema>;

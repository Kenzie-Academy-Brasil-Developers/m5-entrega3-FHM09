import z from 'zod';

export const carSchema = z.object({
   id: z.string(),
   name: z.string(),
   description: z.string().optional().nullish(),
   brand: z.string(),
   year: z.number(),
   km: z.number()
});

export const carCreateSchema = carSchema.omit({ id: true });
export const carUpdateSchema = carCreateSchema.partial();
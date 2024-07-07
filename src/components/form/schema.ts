import { z } from 'zod';

const schema = z.object({
  data: z.object({
    'nested-form': z.object({
      name: z.string(),
      email: z.string().email(),
    }),
    'effected-form': z.object({
      job: z.string(),
      'input-job': z.string(),
    }),
  }),
});

export type TSchema = z.infer<typeof schema>;

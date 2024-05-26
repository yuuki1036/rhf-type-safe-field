import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import ZodFieldArray from './form';

export type FormValues = {
  data: {
    users: {
      name: string;
      email: string;
      age: number;
      hobby: string[];
    }[];
  };
};

const schema = z.object({
  data: z.object({
    users: z.array(
      z.object({
        name: z.string(),
        email: z.string().email(),
        age: z.number().int(),
        hobby: z.array(z.string()),
      })
    ),
  }),
});

const RHFZodForm = () => {
  const methods = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      data: {
        users: [
          {
            name: '',
            email: '',
            age: 0,
            hobby: [''],
          },
        ],
      },
    },
  });

  return (
    <FormProvider {...methods}>
      <form>
        <ZodFieldArray />
      </form>
    </FormProvider>
  );
};

export default RHFZodForm;

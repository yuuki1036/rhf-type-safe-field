import { useForm, FormProvider } from 'react-hook-form';
import { TSchema } from './schema';
import { PropsWithChildren } from 'react';

export default function CustomFormProvider({ children }: PropsWithChildren) {
  const methods = useForm<TSchema>({
    mode: 'onChange',
  });

  const onSubmit = (data: TSchema) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}

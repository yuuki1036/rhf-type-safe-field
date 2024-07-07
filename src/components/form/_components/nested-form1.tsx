import { Stack, TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { TSchema } from '../schema';

export default function NestedForm1() {
  const { register } = useFormContext<TSchema>();
  return (
    <Stack spacing={4} maxWidth={'400px'}>
      <TextField label={'name'} {...register('data.nested-form.name')} />
      <TextField label={'email'} {...register('data.nested-form.email')} />
    </Stack>
  );
}

import { Stack, TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { TSchema } from '../schema';

export default function EffectedForm() {
  const { register } = useFormContext<TSchema>();
  return (
    <Stack spacing={4} maxWidth={'400px'}>
      <TextField label={'email'} {...register('data.nested-form.email')} />
    </Stack>
  );
}

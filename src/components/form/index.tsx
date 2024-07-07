import { Button, Stack } from '@mui/material';
import NestedForm1 from './_components/nested-form1';
import CustomFormProvider from './provider';
import EffectedForm from './_components/effected-form';

export default function MyForm() {
  return (
    <CustomFormProvider>
      <Stack spacing={4} maxWidth={'400px'}>
        <NestedForm1 />
        <EffectedForm />
        <Button type={'submit'} variant={'contained'}>
          送信
        </Button>
      </Stack>
    </CustomFormProvider>
  );
}

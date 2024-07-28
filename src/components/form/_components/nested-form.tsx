import { useFormContext } from 'react-hook-form';
import { TSchema } from '../schema';

export default function NestedForm1() {
  const { register } = useFormContext<TSchema>();
  return (
    <>
      <div>
        <label className="block font-bold">name</label>
        <input className="outline" {...register('data.nested-form.name')} />
      </div>
      <div>
        <label className="block font-bold">email</label>
        <input className="outline" {...register('data.nested-form.email')} />
      </div>
    </>
  );
}

import { useFieldArray, useFormContext } from 'react-hook-form';
import { FormValues } from '.';
import { createFieldPathValidator } from '../../utils/validate-field-name';

const n = createFieldPathValidator<FormValues>();

const ZodFieldArray = () => {
  const { register } = useFormContext();

  const { fields: usersFields } = useFieldArray({
    name: n(['data', 'users']),
  });

  return (
    <>
      {usersFields.map((field, index) => (
        <div key={field.id}>
          <input
            type="text"
            {...register(n(['data', 'users', index, 'age']))}
          />
          <input type="email" {...register(`data.users.${index}.email`)} />
          <input type="number" {...register(`data.users.${index}.a`)} />
        </div>
      ))}
    </>
  );
};

export default ZodFieldArray;

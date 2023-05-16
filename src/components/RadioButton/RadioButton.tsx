import { RadioButtonType } from './type';
import { useRadioButton } from './useRadioButton';
import { ErrorMessage } from '@hookform/error-message';
import { FC } from 'react';

export const RadioButton: FC<RadioButtonType> = ({ title, name, values }) => {
  const { errors, register } = useRadioButton();

  return (
    <div className='flex relative flex-col mb-10'>
      <h1 className='font-bold text-2xl mb-4 '>{title}</h1>
      {values.map((value, i) => (
        <label
          key={value.en}
          htmlFor={`${name}-${i}`}
          className='text-xl flex items-center mb-4 pl-12'
        >
          <input
            type='radio'
            id={`${name}-${i}`}
            value={value.en}
            className=' relative '
            {...register(name, {
              // todo
              onChange: (e) => localStorage.setItem(e.target.value, '2'),
            })}
          />
          {value.ka}
        </label>
      ))}

      <span className='absolute left-2 bottom-0 translate-y-full text-red-550 text-base'>
        <ErrorMessage errors={errors} name={name} />
      </span>
    </div>
  );
};

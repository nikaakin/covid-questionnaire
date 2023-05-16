import { CheckboxSvg } from '@/assets/CheckboxSvg';
import { RadioButtonType } from '@/components/RadioButton/type';
import { useRadioButton } from '@/components/RadioButton/useRadioButton';
import { ErrorMessage } from '@hookform/error-message';
import { FC } from 'react';

export const RadioButton: FC<RadioButtonType> = ({ title, name, values }) => {
  const { checkedValue, errors, register, setCheckedValue } =
    useRadioButton(name);

  return (
    <div className='flex relative flex-col mb-10'>
      <h1 className='font-bold text-2xl mb-4 '>{title}</h1>
      {values.map((value, i) => (
        <label
          key={value.en}
          htmlFor={`${name}-${i}`}
          className='text-xl flex items-center mb-4 pl-4'
        >
          <CheckboxSvg fill={checkedValue === value.en ? true : false} />
          <input
            type='radio'
            id={`${name}-${i}`}
            value={value.en}
            className='invisible'
            {...register(name, {
              onChange: (event) => {
                setCheckedValue(event.target.value);
              },
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

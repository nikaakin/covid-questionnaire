import { TextAreaType } from './type';
import { Fragment } from 'react';

export const TextArea = ({
  title = '',
  name,
  value,
  register,
  placeholder = '',
}: TextAreaType) => {
  return (
    <Fragment>
      <label htmlFor={name} className='block font-bold text-xl mb-5 '>
        {title}
      </label>
      <textarea
        className='bg-transparent border-[0.8px] border-neutral-850 w-full mb-12 min-h-[180px]'
        id={name}
        value={value}
        {...register}
        placeholder={placeholder}
      ></textarea>
    </Fragment>
  );
};

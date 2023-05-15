import { InputType } from '@/components';
import { ErrorMessage } from '@hookform/error-message';

export const Input = ({ register, errors, name, title }: InputType) => {
  return (
    <div className='flex relative flex-col mb-10'>
      <label htmlFor={name} className='font-bold text-2xl mb-3'>
        {title}*
      </label>
      <input
        type='text'
        {...register}
        className='px-5 py-3 bg-transparent border-[0.8px] border-neutral-850  text-lg '
      />

      <span className='absolute left-2 bottom-0 translate-y-full text-red-550 text-base'>
        <ErrorMessage errors={errors} name={name} />
      </span>
    </div>
  );
};

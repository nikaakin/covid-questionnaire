import { Input } from '@/components';
import { usePersonalInfoForm } from './usePersonalInfoForm';

export const PersonalInfoForm = () => {
  const { errors, register, setData, data } = usePersonalInfoForm();
  return (
    <div className='text-neutral-850 pt-10 flex-1'>
      <Input
        placeholder='სახელი'
        register={register('first_name', {
          required: 'სახელის ველის შევსება სავალდებულოა',
          minLength: {
            value: 3,
            message: 'სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან',
          },
          onChange(event) {
            setData({ ...data, first_name: event.target.value });
          },
        })}
        errors={errors}
        name='first_name'
        title='სახელი*'
      />
      <Input
        placeholder='გვარი'
        register={register('last_name', {
          required: 'გვარის ველის შევსება სავალდებულოა',
          minLength: {
            value: 3,
            message: 'გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან',
          },
          onChange(event) {
            setData({ ...data, last_name: event.target.value });
          },
        })}
        errors={errors}
        name='last_name'
        title='გვარი*'
      />
      <Input
        placeholder='ელ.ფოსტა'
        register={register('email', {
          required: 'ელ.ფოსტის ველის შევსება სავალდებულოა',
          validate: (value: string) => {
            const emailRegex =
              /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
            if (!emailRegex.test(value))
              return 'თქვენ მიერ შეყვანილი მეილი არასწორია';

            if (!value.endsWith('@redberry.ge'))
              return 'გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)';
          },
          onChange(event) {
            setData({ ...data, email: event.target.value });
          },
        })}
        errors={errors}
        name='email'
        title='ელ.ფოსტა*'
      />

      <span className='block mt-16   text-base text-zinc-650 w-72'>
        <hr className='border-t-[0.8px] border-black w-[80%] pb-5' />
        *-ით მონიშნული ველების შევსება სავალდებულოა
      </span>
    </div>
  );
};

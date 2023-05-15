import { Input } from '@/components';
import { usePersonalInfoForm } from '@/pages/PersonalInfo/components/PersonalInfoForm/usePersonalInfoForm';

export const PersonalInfoForm = () => {
  const { errors, register, setEmail, setFirstName, setLastName } =
    usePersonalInfoForm();
  return (
    <div className='text-neutral-850 pt-10'>
      <Input
        register={register('first_name', {
          required: 'სახელის ველის შევსება სავალდებულოა',
          minLength: {
            value: 2,
            message: 'სახელის ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან',
          },
          onChange(event) {
            setFirstName(event.target.value);
          },
        })}
        errors={errors}
        name='first_name'
        title='სახელი'
      />
      <Input
        register={register('last_name', {
          required: 'გვარის ველის შევსება სავალდებულოა',
          minLength: {
            value: 2,
            message: 'გვარის ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან',
          },
          onChange(event) {
            setLastName(event.target.value);
          },
        })}
        errors={errors}
        name='last_name'
        title='გვარი'
      />
      <Input
        register={register('email', {
          required: 'ელ.ფოსტის ველის შევსება სავალდებულოა',
          validate: (value: string) => {
            if (!value.includes('@'))
              return 'თქვენ მიერ შეყვანილი მეილი არასწორია';
            if (!value.includes('@redberry.ge'))
              return 'გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)';
          },
          onChange(event) {
            setEmail(event.target.value);
          },
        })}
        errors={errors}
        name='email'
        title='ელ.ფოსტა'
      />

      <span className='block mt-16   text-base text-zinc-650 w-72'>
        <hr className='border-t-[0.8px] border-black w-[80%] pb-5' />
        *-ით მონიშნული ველების შევსება სავალდებულოა
      </span>
    </div>
  );
};

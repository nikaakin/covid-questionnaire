import { usePersonalInfoContext } from '@/context';
import { useFormContext } from 'react-hook-form';

export const usePersonalInfoForm = () => {
  const { setData, data } = usePersonalInfoContext();
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return {
    setData,
    register,
    errors,
    data,
  };
};

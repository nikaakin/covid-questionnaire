import { personalInfoContext } from '@/context/personalInfoContext';
import { useContext } from 'react';
import { useFormContext } from 'react-hook-form';

export const usePersonalInfoForm = () => {
  const { setData, data } = useContext(personalInfoContext);
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

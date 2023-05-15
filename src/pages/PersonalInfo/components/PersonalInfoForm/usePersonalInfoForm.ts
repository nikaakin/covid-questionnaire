import { personalInfoContext } from '@/context/personalInfoContext';
import { useContext } from 'react';
import { useFormContext } from 'react-hook-form';

export const usePersonalInfoForm = () => {
  const { setEmail, setFirstName, setLastName } =
    useContext(personalInfoContext);
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return {
    setEmail,
    setFirstName,
    setLastName,
    register,
    errors,
  };
};

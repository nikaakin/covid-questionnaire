import { useFormContext } from 'react-hook-form';

export const useRadioButton = () => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  return {
    register,
    errors,
    setValue,
  };
};

import { useFormContext } from 'react-hook-form';

export const useRadioButton = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return {
    register,
    errors,
  };
};

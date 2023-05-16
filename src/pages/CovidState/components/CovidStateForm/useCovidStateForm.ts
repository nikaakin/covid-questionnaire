import { useFormContext } from 'react-hook-form';

export const useCovidStateForm = () => {
  const {
    register,
    setError,
    setValue,
    clearErrors,
    formState: { errors },
  } = useFormContext();

  return {
    register,
    setError,
    setValue,
    clearErrors,
    errors,
  };
};

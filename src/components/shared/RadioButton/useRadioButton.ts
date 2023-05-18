import { covidStateContext } from '@/context';
import { useContext } from 'react';
import { useFormContext } from 'react-hook-form';

export const useRadioButton = () => {
  const { setCovidStateData } = useContext(covidStateContext);
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  return {
    register,
    errors,
    setValue,
    setCovidStateData,
  };
};

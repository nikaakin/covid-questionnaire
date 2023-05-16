import { getLocaleStorageValues } from '@/helpers';
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

export const useRadioButton = (key: string) => {
  const [checkedValue, setCheckedValue] = useState<string>('');
  const {
    register,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    setCheckedValue(getLocaleStorageValues('covid-state')[key]);
  }, [key]);

  return {
    checkedValue,
    setCheckedValue,
    register,
    errors,
  };
};

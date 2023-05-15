import { FormType } from '@/helpers/type';

export const getLocaleStorageValues = (key: string) => {
  const formValues = JSON.parse(localStorage.getItem(key) || '{}') as FormType;
  return {
    ...formValues,
  };
};

import {
  AreYouVaccinatedType,
  CovidPoliticsType,
  CovidStateType,
  PersonalInfoType,
} from '@/helpers/type';

export const getLocaleStorageValues = (key: string) => {
  const formValues = JSON.parse(localStorage.getItem(key) || '{}') as
    | PersonalInfoType
    | CovidStateType
    | CovidPoliticsType
    | AreYouVaccinatedType;
  return {
    ...formValues,
  };
};

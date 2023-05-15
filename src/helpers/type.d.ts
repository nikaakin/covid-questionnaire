import { PersonalInfo } from '@/pages';

export type PersonalInfoType = {
  first_name: string;
  last_name: string;
  email: string;
};

export type CovidStateType = {
  first_name: string;
  last_name: string;
  email: string;
};

export type CovidPoliticsType = {
  first_name: string;
  last_name: string;
  email: string;
};

export type AreYouVaccinatedType = {
  first_name: string;
  last_name: string;
  email: string;
};

export type FormType =
  | PersonalInfoType
  | CovidStateType
  | CovidPoliticsType
  | AreYouVaccinatedType;

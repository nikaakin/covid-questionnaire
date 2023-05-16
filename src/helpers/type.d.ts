export type PersonalInfoType = {
  first_name: string;
  last_name: string;
  email: string;
};

export type CovidStateType = {
  had_covid: 'yes' | 'no' | 'have_right_now';
  had_antibody_test: boolean;
  covid_sickness_date: string;
  antibodies: { test_date: string; number: integer };
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

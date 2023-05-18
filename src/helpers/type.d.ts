export type PersonalInfoType = {
  first_name: string;
  last_name: string;
  email: string;
};

export type CovidStateType = {
  had_covid: 'yes' | 'no' | 'have_right_now' | null;
  had_antibody_test: string | null;
  covid_sickness_date: string | null;
  antibodies: { test_date: string; number: string } | null;
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

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

export type CovidStateApiType = {
  had_covid: 'yes' | 'no' | 'have_right_now' | null;
  had_antibody_test?: boolean;
  covid_sickness_date?: Date;
  antibodies?: { test_date: Date; number: number } | null;
};

export type CovidPoliticsType = {
  had_vaccine: string;
  vaccination_stage:
    | 'first_dosage_and_registered_on_the_second'
    | 'fully_vaccinated'
    | 'first_dosage_and_not_registered_yet';
  i_am_waiting:
    | 'registered_and_waiting'
    | 'not_planning'
    | 'had_covid_and_planning_to_be_vaccinated';
};

export type CovidPoliticsApiType = {
  had_vaccine: boolean;
  vaccination_stage?:
    | 'first_dosage_and_registered_on_the_second'
    | 'fully_vaccinated'
    | 'first_dosage_and_not_registered_yet';
  i_am_waiting?:
    | 'registered_and_waiting'
    | 'not_planning'
    | 'had_covid_and_planning_to_be_vaccinated';
};

export type AreYouVaccinatedType = {
  non_formal_meetings:
    | 'twice_a_week'
    | 'once_a_week'
    | 'once_in_a_two_weeks'
    | 'once_in_a_month';
  number_of_days_from_office: '0' | '1' | '2' | '3' | '4' | '5';
  what_about_meetings_in_live: string;
  tell_us_your_opinion_about_us: string;
};

export type FormType =
  | PersonalInfoType
  | CovidStateType
  | CovidPoliticsType
  | AreYouVaccinatedType;

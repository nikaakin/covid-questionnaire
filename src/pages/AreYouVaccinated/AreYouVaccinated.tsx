import { AreYouVaccinateAnimation, AreYouVaccinateForm } from '@/pages';
import { Fragment } from 'react';

export const AreYouVaccinated = () => {
  return (
    <Fragment>
      <AreYouVaccinateForm />
      <AreYouVaccinateAnimation />
    </Fragment>
  );
};

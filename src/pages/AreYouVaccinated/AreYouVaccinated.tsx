import { AreYouVaccinatedAnimation, AreYouVaccinatedForm } from '@/pages';
import { Fragment } from 'react';

export const AreYouVaccinated = () => {
  return (
    <Fragment>
      <AreYouVaccinatedForm />
      <AreYouVaccinatedAnimation />
    </Fragment>
  );
};

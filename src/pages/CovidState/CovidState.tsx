import { CovidStateAnimation, CovidStateForm } from '@/pages';
import { Fragment } from 'react';

export const CovidState = () => {
  return (
    <Fragment>
      <CovidStateForm />
      <CovidStateAnimation />
    </Fragment>
  );
};

import { AreYouVaccinatedType, getLocaleStorageValues } from '@/helpers';
import { FC, PropsWithChildren, createContext, useState } from 'react';

const {
  non_formal_meetings,
  number_of_days_from_office,
  tell_us_your_opinion_about_us,
  what_about_meetings_in_live,
}: AreYouVaccinatedType = getLocaleStorageValues('are-you-vaccinated');

export const areYouVaccinatedContext = createContext({
  data: {
    non_formal_meetings,
    number_of_days_from_office,
    tell_us_your_opinion_about_us,
    what_about_meetings_in_live,
  },
  setAreYouVaccinatedData: (_: string, __: string) => {},
});

export const AreYouVaccinatedProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [data, setData] = useState<AreYouVaccinatedType>({
    non_formal_meetings,
    number_of_days_from_office,
    tell_us_your_opinion_about_us,
    what_about_meetings_in_live,
  });

  const setAreYouVaccinatedData = (key: string, value: string) => {
    localStorage.setItem(
      'are-you-vaccinated',
      JSON.stringify({ ...data, [key]: value })
    );
    setData({ ...data, [key]: value });
  };

  return (
    <areYouVaccinatedContext.Provider
      value={{
        data,
        setAreYouVaccinatedData,
      }}
    >
      {children}
    </areYouVaccinatedContext.Provider>
  );
};

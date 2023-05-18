import { CovidStateType, getLocaleStorageValues } from '@/helpers';
import { FC, PropsWithChildren, createContext, useState } from 'react';

const {
  antibodies,
  covid_sickness_date,
  had_antibody_test,
  had_covid,
}: CovidStateType = getLocaleStorageValues('covid-state');

export const covidStateContext = createContext({
  data: {
    had_covid,
    antibodies,
    had_antibody_test,
    covid_sickness_date,
  },
  setCovidStateData: (key: string, value: string) => {},
  setAntibodies: (key: string, value: string) => {},
});

export const CovidStateProvider: FC<PropsWithChildren> = ({ children }) => {
  const [data, setData] = useState<CovidStateType>({
    had_covid,
    antibodies,
    had_antibody_test,
    covid_sickness_date,
  });

  const setCovidStateData = (key: string, value: string) => {
    localStorage.setItem(
      'covid-state',
      JSON.stringify({ ...data, [key]: value })
    );
    setData({ ...data, [key]: value });
  };

  const setAntibodies = (key: string, value: string) => {
    localStorage.setItem(
      'covid-state',
      JSON.stringify({
        ...data,
        antibodies: { ...data.antibodies, [key]: value },
      })
    );
    setData({
      ...data,
      antibodies: { ...data.antibodies!, [key]: value },
    });
  };

  return (
    <covidStateContext.Provider
      value={{
        data,
        setCovidStateData,
        setAntibodies,
      }}
    >
      {children}
    </covidStateContext.Provider>
  );
};

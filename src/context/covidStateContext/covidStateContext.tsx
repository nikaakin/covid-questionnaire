import { CovidStateType, getLocaleStorageValues } from '@/helpers';
import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react';

const {
  test_date,
  number,
  covid_sickness_date,
  had_antibody_test,
  had_covid,
}: CovidStateType = getLocaleStorageValues('covid-state');

export const covidStateContext = createContext({
  data: {
    had_covid,
    test_date,
    number,
    had_antibody_test,
    covid_sickness_date,
  },
  setCovidStateData: (_: string, __: string) => {},
});

export const CovidStateProvider: FC<PropsWithChildren> = ({ children }) => {
  const [data, setData] = useState({
    had_covid,
    number,
    test_date,
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

  return (
    <covidStateContext.Provider
      value={{
        data,
        setCovidStateData,
      }}
    >
      {children}
    </covidStateContext.Provider>
  );
};

export const useCovidStateContext = () => useContext(covidStateContext);

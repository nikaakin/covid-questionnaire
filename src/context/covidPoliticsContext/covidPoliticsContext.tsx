import { CovidPoliticsType, getLocaleStorageValues } from '@/helpers';
import { FC, PropsWithChildren, createContext, useState } from 'react';

const { had_vaccine, vaccination_stage, i_am_waiting }: CovidPoliticsType =
  getLocaleStorageValues('covid-politics');

export const covidPoliticsContext = createContext({
  data: {
    had_vaccine,
    vaccination_stage,
    i_am_waiting,
  },
  setCovidPoliticsData: (_: string, __: string) => {},
});

export const CovidPoliticsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [data, setData] = useState<CovidPoliticsType>({
    had_vaccine,
    vaccination_stage,
    i_am_waiting,
  });

  const setCovidPoliticsData = (key: string, value: string) => {
    localStorage.setItem(
      'covid-politics',
      JSON.stringify({ ...data, [key]: value })
    );
    setData({ ...data, [key]: value });
  };

  return (
    <covidPoliticsContext.Provider
      value={{
        data,
        setCovidPoliticsData,
      }}
    >
      {children}
    </covidPoliticsContext.Provider>
  );
};

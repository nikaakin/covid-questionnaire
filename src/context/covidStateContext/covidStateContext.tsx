import { CovidStateType, getLocaleStorageValues } from '@/helpers';
import {
  FC,
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from 'react';

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
  firstAdditionalInput: false,
  secondAdditionalInput: false,
  thirdAdditionalInput: false,
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
  const [additionalInputs, setAdditionalInput] = useState({
    firstAdditionalInput: false,
    secondAdditionalInput: false,
    thirdAdditionalInput: false,
  });

  useEffect(() => {
    if (data.had_covid === 'yes') {
      setAdditionalInput((inputs) => ({
        ...inputs,
        firstAdditionalInput: true,
      }));
    } else {
      setAdditionalInput((inputs) => ({
        ...inputs,
        firstAdditionalInput: false,
      }));
    }
  }, [data.had_covid]);

  useEffect(() => {
    if (data.had_antibody_test === 'true') {
      setAdditionalInput((inputs) => ({
        ...inputs,
        thirdAdditionalInput: false,
        secondAdditionalInput: true,
      }));
    }
    if (data.had_antibody_test === 'false') {
      setAdditionalInput((inputs) => ({
        ...inputs,
        secondAdditionalInput: false,
        thirdAdditionalInput: true,
      }));
    }
  }, [data.had_antibody_test]);

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
        ...additionalInputs,
        setCovidStateData,
        setAntibodies,
      }}
    >
      {children}
    </covidStateContext.Provider>
  );
};

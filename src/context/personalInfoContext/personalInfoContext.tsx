import { PersonalInfoDataType } from './type';
import { PersonalInfoType, getLocaleStorageValues } from '@/helpers';
import { FC, PropsWithChildren, createContext, useState } from 'react';

const initialState = getLocaleStorageValues(
  'personal-info'
) as PersonalInfoType;

export const personalInfoContext = createContext({
  setData: (_: { first_name: string; last_name: string; email: string }) => {},
  data: {
    first_name: '',
    last_name: '',
    email: '',
  },
});

export const PersonalInfoContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [data, setdata] = useState({
    first_name: initialState.first_name,
    last_name: initialState.last_name,
    email: initialState.email,
  });

  const setData = ({ first_name, last_name, email }: PersonalInfoDataType) => {
    setdata({ first_name, last_name, email });
    localStorage.setItem(
      'personal-info',
      JSON.stringify({ first_name, last_name, email })
    );
  };

  return (
    <personalInfoContext.Provider value={{ setData, data }}>
      {children}
    </personalInfoContext.Provider>
  );
};

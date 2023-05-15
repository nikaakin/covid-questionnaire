import { getLocaleStorageValues } from '@/helpers';
import { PersonalInfoType } from '@/helpers/type';
import { FC, PropsWithChildren, createContext, useState } from 'react';

const initialState = getLocaleStorageValues(
  'personal-info'
) as PersonalInfoType;

export const personalInfoContext = createContext({
  first_name: '',
  last_name: '',
  email: '',
  setFirstName: (_: string) => {},
  setLastName: (_: string) => {},
  setEmail: (_: string) => {},
});

export const PersonalInfoContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [data, setdata] = useState({
    first_name: initialState.first_name,
    last_name: initialState.last_name,
    email: initialState.email,
  });

  const setFirstName = (firstName: string) => {
    setdata((data) => ({ ...data, first_name: firstName }));
    localStorage.setItem(
      'personal-info',
      JSON.stringify({ ...data, first_name: firstName })
    );
  };

  const setLastName = (lastName: string) => {
    setdata((data) => ({ ...data, last_name: lastName }));
    localStorage.setItem(
      'personal-info',
      JSON.stringify({ ...data, last_name: lastName })
    );
  };

  const setEmail = (email: string) => {
    setdata((data) => ({ ...data, email: email }));
    localStorage.setItem(
      'personal-info',
      JSON.stringify({ ...data, email: email })
    );
  };

  return (
    <personalInfoContext.Provider
      value={{ ...data, setEmail, setFirstName, setLastName }}
    >
      {children}
    </personalInfoContext.Provider>
  );
};

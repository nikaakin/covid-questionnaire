import { PropTypes } from '@/context';
import { getLocaleStorageValues } from '@/helpers';
import React, { useState } from 'react';
import { NavigateFunction } from 'react-router-dom';

const pages = [
  'personal-info',
  'covid-state',
  'covid-politics',
  'are-you-vaccinated',
  'thank-you',
];

const initialState = getLocaleStorageValues();

export const context = React.createContext(initialState);

export const Context: React.FC<PropTypes> = ({ children }) => {
  const [page, setPage] = useState(initialState.currentPage);

  const setCurrentPage = (page: number, navigate: NavigateFunction) => {
    setPage(page);
    navigate(pages[page]);
  };

  return (
    <context.Provider
      value={{
        page,
        setCurrentPage,
      }}
    >
      {children}
    </context.Provider>
  );
};

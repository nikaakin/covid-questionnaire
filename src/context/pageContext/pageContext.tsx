import { PropTypes } from './type';
import { FC, createContext, useEffect, useState } from 'react';


export const pageContext = createContext({
  page: 0,
  forwardAnimation: true,
  show: false,
  setCurrentPage: (_: number) => {},
  setForwardValue: (_: boolean) => {},
  setShowValue: (_: boolean) => {},
});

export const PageContext: FC<PropTypes> = ({ children }) => {
  const [page, setPage] = useState(+(localStorage.getItem('page') || 0));
  const [show, setShow] = useState(false);
  const [forwardAnimation, setForwardAnimation] = useState(true);

  useEffect(() => {
    localStorage.setItem('page', page.toString());
  }, [page]);

  const setCurrentPage = (page: number) => {
    setPage(page);
  };

  const setForwardValue = (value: boolean) => {
    setForwardAnimation(value);
  };

  const setShowValue = (value: boolean) => {
    setShow(value);
  };

  return (
    <pageContext.Provider
      value={{
        page,
        forwardAnimation,
        setCurrentPage,
        setForwardValue,
        show,
        setShowValue,
      }}
    >
      {children}
    </pageContext.Provider>
  );
};

import { context } from '@/context';
import { useContext } from 'react';
import { useNavigate, useOutlet } from 'react-router-dom';

export const useLayout = () => {
  const { page, setCurrentPage } = useContext(context);
  const navigate = useNavigate();
  const outlet = useOutlet();

  // TODO  add validation to this functions after
  const previousPage = () => setCurrentPage(page - 1, navigate);
  const nextPage = () => setCurrentPage(page + 1, navigate);

  return {
    page,
    previousPage,
    nextPage,
    navigate,
    outlet,
  };
};

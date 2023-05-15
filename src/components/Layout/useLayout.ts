import { pageContext } from '@/context';
import { routes } from '@/routes';
import { useContext, useEffect } from 'react';
import { useNavigate, useOutlet } from 'react-router-dom';

export const useLayout = () => {
  const { page, setCurrentPage, show, setShowValue, setForwardValue } =
    useContext(pageContext);
  const navigate = useNavigate();
  const outlet = useOutlet();
  const name = routes[page];

  const previousPage = () => {
    setShowValue(false);
    setForwardValue(false);
    setTimeout(() => setCurrentPage(page - 1), 300);
  };

  const nextPage = () => {
    setShowValue(false);
    setForwardValue(true);
    setTimeout(() => setCurrentPage(page + 1), 300);
  };

  useEffect(() => {
    navigate('/' + name);
  }, [navigate, name]);

  return {
    page,
    previousPage,
    nextPage,
    navigate,
    outlet,
    name,
    show,
    setShowValue,
  };
};

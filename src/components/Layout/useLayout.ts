import { pageContext } from '@/context';
import { getLocaleStorageValues } from '@/helpers';
import { routes } from '@/routes';
import { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useLayout = () => {
  const { page, setCurrentPage, show, setShowValue, setForwardValue } =
    useContext(pageContext);
  const navigate = useNavigate();
  const location = useLocation();
  const name = routes[page];
  const initialValues = getLocaleStorageValues(name);

  useEffect(() => {
    if (routes.indexOf(location.pathname.slice(1)) > page) {
      navigate('/');
    }
  }, [location.pathname, navigate, page]);

  const previousPage = () => {
    setShowValue(false);
    setForwardValue(false);
    setTimeout(() => {
      setCurrentPage(page - 1);
      navigate('/' + routes[page - 1]);
    }, 300);
  };

  const nextPage = () => {
    setShowValue(false);
    setForwardValue(true);
    setTimeout(() => {
      setCurrentPage(page + 1);
      navigate('/' + routes[page + 1]);
    }, 300);
  };

  return {
    page,
    previousPage,
    nextPage,
    navigate,
    name,
    show,
    setShowValue,
    initialValues,
  };
};
